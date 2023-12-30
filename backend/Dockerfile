FROM node:latest

WORKDIR /app
COPY package.json .

RUN npm install -g ts-node
RUN npm install
COPY . .

EXPOSE 8080
CMD ["ts-node", "src/server.ts"]