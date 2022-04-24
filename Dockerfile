# Build artifact
FROM node:12-alpine AS build

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

# Create web served by Nginx from ReactJS artifact

FROM nginx:1.20.1-alpine

COPY --from=build /app/build /var/www

COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx","-g","daemon off;"]