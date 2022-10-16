FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate
RUN npx prisma db push

EXPOSE 8000

CMD [ "npm", "start" ]
