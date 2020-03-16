const crypto = require('crypto');

const hasher = crypto.createHash('SHA256');
const data = 'boney';
hasher.update(data);
const hash = hasher.digest('hex');
console.log(`SHA256 hash of ${data} is ${hash}`);
