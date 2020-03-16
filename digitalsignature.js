const crypto = require('crypto');
const { privateKey, publicKey  } = require('./data/keys');

//Sender creates the signature using the private key
const data = 'boney';
const signer = crypto.createSign('sha256');
signer.update(data);
const signature = signer.sign(privateKey,'base64');
console.log(`Signature is ${signature}`);


//Now the signature and public key will be sent to the receiver
const expected = 'boney'; //expected data would already be agreed by sender & receiver
const verifier = crypto.createVerify('sha256');
verifier.update(expected);
const valid = verifier.verify(publicKey, signature,'base64');
console.log(`Signature is ${valid}`);