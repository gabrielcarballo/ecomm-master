FROM node:18.17-alpine

WORKDIR /application/backend

COPY package*.* ./

RUN npm install

COPY . .

EXPOSE 3001

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD curl --fail http://localhost:3001/ || exit 1

