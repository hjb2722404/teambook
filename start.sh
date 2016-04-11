#!/bin/bash

docker rm -f www-server

docker run --name www-server -d -p 8001:80 -e VIRTUAL_HOST=www.supermary2.com -v /home/www/teambook-www/dist:/usr/share/nginx/html:ro  nginx
