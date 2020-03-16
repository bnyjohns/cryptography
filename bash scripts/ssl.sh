ssh-keygen
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_rsa
touch ~/.ssh/known_hosts