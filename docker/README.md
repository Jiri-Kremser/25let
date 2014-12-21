sudo docker build --force-rm=true -t 25let:latest .
sudo docker run -d -p 3000:3000 25let:latest
