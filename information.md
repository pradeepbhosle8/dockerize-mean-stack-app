```
version: '1.0'
services:
 front:  
  build:
    context: './client'
    dockerfile: Dockerfile
    ports:
       - 3000:3000
    container_name: react-container
    environment:
       - WATCHPACK_POLLING=true
    networks:
       - mern-stack-network
    volumes:
       - ./client:/fronted
    depends_on:
       - backend

 backend:
  build:
   context: './api'
   dockerfile: Dockerfile
   ports: - 5000:5000
   container_name: api-container
   networks: - mern-stack-network
   volumes: - ./api:/api
   depends_on: - mongo

 mongo:
  image: mongo:3.2
  ports: - 27017:27017
  container_name: mongo-container
  networks: - mern-stack-network
  volumes: - mongoData:/data/db

networks:
mern-stack-network:

volumes:
mongoData:
```
##Open Terminal
```
docker-compose up -d
or
docker-compose up
```
-d: ditach mode
