# Generate key pair
ssh-keygen

# Now manually add the generated public key in BitBucket
# (This effectively adds the public key to ~/.ssh/authorized_keys in the Bitbucket server)
# It can also be done by "ssh-copy-id", if we have remote access to the Bitbucket server

# Create an instance of ssh-agent (eval will set the Enviroment variables in this shell)
eval $(ssh-agent -s)

#Print the Agent Pid
echo 'Agent pid is: ' $SSH_AGENT_PID

# Add generated private key to the ssh agent
ssh-add ~/.ssh/id_rsa

# Create known_hosts file
touch ~/.ssh/known_hosts

# Add server fingerprint of repository server to known_hosts file
ssh-keygen -F bitbucket.org || ssh-keyscan bitbucket.org >> ~/.ssh/known_hosts

# Now establish connection with repository and clone the code
git clone git@bitbucket.org:bnyjohns/cryptography.git