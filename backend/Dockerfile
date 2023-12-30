FROM node:latest

WORKDIR /app
COPY package*.json .

RUN npm install -g @pnpm/exe
RUN pnpm install

RUN pnpm install
COPY . .

EXPOSE 8080
CMD ["ts-node", "src/server.ts"]