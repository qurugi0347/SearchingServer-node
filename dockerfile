FROM node
#
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm install -g pm2
#앱 포트 설정
EXPOSE 5000
RUN npm install Unitech/pm2#development -g

#배포용
CMD pm2-runtime -i 0 bin/www
#개발용
#CMD ["/bin/bash"]
