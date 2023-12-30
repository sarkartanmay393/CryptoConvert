FROM node:latest

WORKDIR /app
COPY package*.json .

RUN npm install -g @pnpm/exe
RUN pnpm install

COPY . .
RUN pnpm run build

EXPOSE 3000
CMD ["pnpm", "run", "preview"]