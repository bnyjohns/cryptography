const crypto = require("crypto");
const { privateKey, publicKey  } = require('./data/keys');
const assert = require('assert');

const input = '123456789';
const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(input, 'utf8')).toString("base64");
const decrypted = crypto.privateDecrypt(privateKey, Buffer.from(encrypted, 'base64')).toString('utf8');

assert.equal(decrypted, input, 'asymmetric encryption failed');
console.log(`asymmetric encryption success`);






