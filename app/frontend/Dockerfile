FROM node:18.17-alpine

WORKDIR /app-frontend

COPY package*.* ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD curl --fail http://localhost:3000/ || exit 1

