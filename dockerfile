#기본 이미지 설정
FROM node
#워크 디렉터리 생성 및 지정
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
#현재 폴더로부터 패키지.json과 그외 파일 전부 복사
COPY package*.json ./
COPY . .
#npm install
RUN npm install
RUN npm install -g pm2
#앱 포트 설정
EXPOSE 5000
RUN npm install Unitech/pm2#development -g

#배포용
CMD pm2-runtime -i 0 bin/www
#개발용
#CMD ["/bin/bash"]
