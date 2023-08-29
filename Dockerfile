FROM node:alpine3.11
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN yarn
COPY . /app
EXPOSE 5173
CMD ["yarn", "prod"]
