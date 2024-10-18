FROM node:23-alpine3.19
WORKDIR /app
COPY . .
ENV PORT=3000
RUN npm install
EXPOSE $PORT
ENTRYPOINT ["node", "server.js"]
# docker build --tag=pagina-exp:latest .
# docker run -p3000:3000 -d --net=docker-network --name=pagina-exp  pagina-exp:latest