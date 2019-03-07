#!/bin/sh
ssh leekinsung@128.199.222.14 <<EOF
 cd ~/goodfeed
 git pull
 npm install
 pm2 restart all
 exit
EOF