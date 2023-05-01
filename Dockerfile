FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json .
RUN npm i
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
