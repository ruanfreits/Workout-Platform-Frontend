FROM node:20-bookworm as build

# Criar diretório e garantir permissões corretas antes de copiar os arquivos
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

# Copiar arquivos como root
COPY package*.json ./

# Ajustar permissões dos arquivos para o usuário node
RUN chown -R node:node /home/node/app

# Mudar para usuário node
USER node

# Agora instalar as dependências sem erro de permissão
RUN npm install

# Copiar o restante do código com as permissões corretas
COPY --chown=node:node . .

FROM nginx:latest
COPY --from=build /home/node/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]