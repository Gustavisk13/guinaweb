FROM node:alpine3.11
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install --legacy-peer-deps
COPY . /app
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]