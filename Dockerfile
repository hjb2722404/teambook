FROM 	silarsis/yeoman
ADD 	. /www
WORKDIR /www
RUN npm install
RUN bower install 
