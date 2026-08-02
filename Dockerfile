# ---- 构建阶段 ----
FROM node:22-alpine AS build
WORKDIR /app

# 先拷依赖清单，利用 Docker 层缓存（package.json 没变时 npm ci 不会重跑）
COPY package*.json ./
RUN npm ci

# 拷贝源码并构建
COPY . .
RUN npm run build

# ---- 运行阶段 ----
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]