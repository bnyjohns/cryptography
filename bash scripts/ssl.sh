# Generate 2048 bit RSA key pair
#openssl genrsa -out privateKey.pem 2048

#Generate the certificate(.crt file)
openssl req -newkey rsa:2048 -nodes -keyout privateKey.pem -x509 -days 365 -out codingsoldier.crt

# Extract out public key
openssl rsa -in privateKey.pem -outform PEM -pubout -out publicKey.pem

# Print the keys
cat "privateKey.pem"
cat "publicKey.pem"


