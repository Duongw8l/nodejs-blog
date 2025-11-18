FROM node:20-alpine


WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

ENV NODE_ENV=production
RUN npm run build-css

EXPOSE 3000

CMD ["node", "src/index.js"]

