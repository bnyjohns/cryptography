const assert = require('assert');
const crypto = require('crypto');

const algorithm = 'aes256';
const inputEncoding = 'utf8';
const outputEncoding = 'hex';
const ivlength = 16;

const secret = 'mysecret';
const key = crypto.createHash('sha256').update(secret).digest('base64').substr(0, 32);
const text = '123456789';

console.log(`Input text is ${text}`);

const iv = crypto.randomBytes(ivlength);
const cipher = crypto.createCipheriv(algorithm, key, iv);
const ciphered = cipher.update(text, inputEncoding, outputEncoding) + cipher.final(outputEncoding);
const ciphertext = iv.toString(outputEncoding) + ':' + ciphered

console.log(`Enrypted text is ${ciphertext}`);

const components = ciphertext.split(':');
const iv_from_ciphertext = Buffer.from(components.shift(), outputEncoding);
const decipher = crypto.createDecipheriv(algorithm, key, iv_from_ciphertext);
const deciphered = decipher.update(components.join(':'), outputEncoding, inputEncoding) + decipher.final(inputEncoding);
console.log(`Decrypted text is: ${deciphered}`);

assert.equal(deciphered, text, 'Deciphered text does not match!');