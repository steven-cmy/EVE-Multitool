# EVE-Multitool

一个多语言支持的 Vue 3 + Vite 前端项目，面向 EVE 及游戏工具，旨在覆盖广泛的游戏辅助功能。

[English](README.md)

## 部署

### 本地构建

```sh
npm install
npm run build
```

### 本地运行（不使用 Docker）

```sh
npm run preview
```

### 使用 Docker 部署

此项目包含一个多阶段 Docker 构建，并使用 Nginx 提供生产构建结果。

1. 构建 Docker 镜像：

```sh
docker build -t eve-multitool .
```

2. 运行容器：

```sh
docker run --rm -p 8080:80 eve-multitool
```

3. 在浏览器中打开 `http://localhost:8080`。

若更改源代码后需要重新构建，请先运行构建命令，然后重新构建 Docker 镜像。

### 自定义 Nginx 配置

Docker 镜像使用仓库中的 `nginx.conf` 来配置静态文件服务。

## 开发

### 推荐 IDE 配置

- Visual Studio Code
- 安装 Volar Vue 3 插件
- 禁用 Vetur（如果已安装）

### 安装依赖

```sh
npm install
```

### 启动开发服务器

```sh
npm run dev
```

### 生产构建

```sh
npm run build
```

### 类型检查

使用 Vue TypeScript 检查器处理 `.vue` 导入：

```sh
npm run typecheck
```

### 代码风格检查

```sh
npm run lint
```

### 运行测试

#### 单元测试

```sh
npm run test:unit
```

#### 端到端测试

```sh
npx playwright install
npm run build
npm run test:e2e
```

对于特定浏览器或调试选项，请使用 Playwright 支持的相同标志。
