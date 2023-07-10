FROM node
WORKDIR /src
COPY . .
EXPOSE 13000
CMD node server.js