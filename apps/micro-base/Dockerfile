# 使用最新版nginx官方镜像
FROM nginx:1.24.0

# 删除默认的html文件
RUN rm -rf /usr/share/nginx/html/*


# 复制构建后的静态文件
COPY dist/ /usr/share/nginx/html/

# 设置工作目录
WORKDIR /usr/share/nginx/html
# 复制nginx配置文件
COPY shell/nginx.conf /etc/nginx/conf.d/default.conf

# 保持容器运行
CMD ["nginx", "-g", "daemon off;"]
