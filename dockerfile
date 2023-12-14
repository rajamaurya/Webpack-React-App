FROM node

WORKDIR /webpack-react-app

COPY package*.json /webpack-react-app/

RUN npm install

COPY . /webpack-react-app/

EXPOSE 3000

CMD [ "npm","start" ]
