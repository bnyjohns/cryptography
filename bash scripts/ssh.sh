# Generate key pair
ssh-keygen

# Now manually add the generated public key in Gitlab 
# (This effectively adds the public key to ~/.ssh/authorized_keys in the gitlab server)
# It can also be done by "ssh-copy-id", if we have remote access to the gitlab server

# Create an instance of ssh-agent (eval will set the Enviroment variables in this shell)
eval $(ssh-agent -s)

#Print the Agent Pid
echo 'Agent pid is: ' $SSH_AGENT_PID

# Add generated private key to the ssh agent
ssh-add ~/.ssh/id_rsa

# Create known_hosts file
touch ~/.ssh/known_hosts

# Add server fingerprint of gilab.logitech.com to known_hosts file
ssh-keygen -F gitlab.logitech.com || ssh-keyscan gitlab.logitech.com >> ~/.ssh/known_hosts

# Now establish connection with gitlab and clone the code
git clone git@gitlab.logitech.com:dfu/dfu_secure_qt.git