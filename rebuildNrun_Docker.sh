#! /bin/bash
#실행중인 컨테이너 종료
sudo docker kill node01
sudo docker kill node02
sudo docker kill node03
#컨테이너 삭제
sudo docker rm node01
sudo docker rm node02
sudo docker rm node03
#현재 이미지 삭제
sudo docker rmi rhythmn/express
#이미지 다시 빌드
sudo docker build -t rhythmn/express .
#컨테이너 실행
sudo docker run -p 5011:5000 -d --name node01 rhythmn/express
sudo docker run -p 5012:5000 -d --name node02 rhythmn/express
sudo docker run -p 5013:5000 -d --name node03 rhythmn/express
