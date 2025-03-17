# micro-app 的 Dockerfile
# 构建阶段
FROM node:20-alpine AS build
RUN npm install -g pnpm
WORKDIR ../../
COPY . .
# 构建静态文件到 dist/
RUN pnpm install && pnpm run build:react  

# 部署阶段
WORKDIR /apps/react-app
FROM nginx:alpine
COPY --from=build /dist /usr/share/nginx/html  # 挂载构建产物