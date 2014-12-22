For building use
```
sudo docker build --force-rm=true -t 25let:latest .
```

after successful build you can run the image by
```
sudo docker run -d -p 3000:3000 25let:latest
```

Or you can download and run the image without building it by
```
sudo docker run -d -p 3000:3000 jkremser/25let:latest
```
