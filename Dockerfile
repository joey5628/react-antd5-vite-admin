# 主项目的Dockerfile
# 构建阶段
FROM node:20-alpine AS build
RUN npm install -g pnpm
COPY . .
# 构建静态文件到 dist/
RUN pnpm install && pnpm run build  

# 部署阶段
WORKDIR /
FROM nginx:alpine
COPY --from=build /apps/micro-app/dist /usr/share/nginx/html/micro-base  # 挂载构建产物
COPY --from=build /apps/react-app/dist /usr/share/nginx/html/react-app  # 挂载构建产物

# 设置环境变量，减少Nginx日志输出以降低磁盘使用
ENV NGINX_LOG_LEVEL=warn

# 复制自定义的Nginx配置文件（如果有）
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]
