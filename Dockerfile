FROM node:18.20.8 as build

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN chown -R node:node /home/node/app

USER node

RUN npm install --legacy-peer-deps

RUN npn run build

# Copiar o restante do código com as permissões corretas
COPY --chown=node:node . .

FROM nginx:latest
COPY --from=build /home/node/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
