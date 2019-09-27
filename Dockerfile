FROM node:12-alpine

EXPOSE 80
EXPOSE 9100

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

CMD ["node", "src/server.js"]
