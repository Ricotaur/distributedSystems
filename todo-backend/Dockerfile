FROM node:18.18.2

WORKDIR /usr/app
 
COPY package*.json ./
 
RUN npm install
 
COPY . .
 
EXPOSE 3000

RUN npm run build
 
CMD [ "npm", "run", "start:prod" ]
