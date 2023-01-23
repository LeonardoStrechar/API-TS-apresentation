FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3001

CMD [ "yarn", "dev" ]

# Comando para criar a imagem do projeto
# docker build . -t node-web-app

# listar imagens
# docker images

# executar imagem
# docker run -p 3000:3000 -d node-web-app

#teste
# curl -i localhost:3000  