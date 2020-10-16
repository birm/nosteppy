FROM node:10-alpine as build-step
RUN mkdir -p /nosteppy
WORKDIR /nosteppy
COPY package.json /nosteppy
RUN npm install
COPY . /nosteppy
RUN npm run build --prod

FROM nginx:1.17.1-alpine
EXPOSE 80/TCP
EXPOSE 443/TCP
COPY --from=build-step /nosteppy/dist /usr/share/nginx/html
