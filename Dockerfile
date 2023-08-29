FROM node:alpine3.11
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN yarn install --legacy-peer-deps
COPY . /app
RUN yarn run build
EXPOSE 5173
CMD ["vite", "build"]