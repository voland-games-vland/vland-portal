# stage1 as builder
FROM node:18-alpine as builder

WORKDIR /web-client

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine as production-build

COPY dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stage 1
COPY --from=builder /web-client/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]