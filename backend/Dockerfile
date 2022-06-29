FROM node:16 AS development

WORKDIR /orine/src/app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

################
## PRODUCTION ##
################

FROM node:16 AS production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /orine/src/app

COPY --from=development /orine/src/app .

EXPOSE 4000

CMD [ "node", "dist/main" ]
