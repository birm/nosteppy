FROM node:10-alpine as build-step
RUN mkdir -p /nosteppy
WORKDIR /nosteppy
COPY package.json /nosteppy
RUN npm install
COPY . /nosteppy
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=build-step /nosteppy/docs /usr/share/nginx/html
