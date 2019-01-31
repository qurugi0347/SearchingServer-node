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
CMD pm2 start bin/www
#CMD ["/bin/bash"]
