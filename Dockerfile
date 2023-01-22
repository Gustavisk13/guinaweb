FROM node:alpine3.11
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install @react-navigation/native @react-navigation/native-stack
COPY . /app
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]