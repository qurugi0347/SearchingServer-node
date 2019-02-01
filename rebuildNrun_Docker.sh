#! /bin/bash
sudo docker kill node01
sudo docker kill node02
sudo docker kill node03
sudo docker rm node01
sudo docker rm node02
sudo docker rm node03
sudo docker rmi rhythmn/express
sudo docker build -t rhythmn/express .
sudo docker run -p 5011:5000 -d --name node01 rhythmn/express
sudo docker run -p 5012:5000 -d --name node02 rhythmn/express
sudo docker run -p 5013:5000 -d --name node03 rhythmn/express
