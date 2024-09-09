FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN npm run build
CMD [ "yarn", "run", "start:dev" ]