# Use uma imagem oficial do Node.js como base
FROM node:14

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação irá rodar
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["npm", "start"]