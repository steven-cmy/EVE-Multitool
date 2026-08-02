# EVE-Multitool

A multilingual Vue 3 + Vite frontend for EVE and gaming utilities, designed to support many languages and cover a wide range of gaming tools.

[简体中文](README.zh-CN.md)

## Deployment

### Build locally

```sh
npm install
npm run build
```

### Run locally without Docker

```sh
npm run preview
```

### Deploy with Docker

This project includes a multi-stage Docker build and serves the production build with Nginx.

1. Build the Docker image:

```sh
docker build -t eve-multitool .
```

2. Run a container:

```sh
docker run --rm -p 8080:80 eve-multitool
```

3. Open your browser at `http://localhost:8080`.

If you want to rebuild after changing source files, run the build command again before rebuilding the Docker image.

### Custom Nginx configuration

The Docker image uses `nginx.conf` from the repository to configure static file serving.

## Development

### Recommended IDE setup

- Visual Studio Code
- Volar extension for Vue 3 support
- Disable Vetur if installed

### Install dependencies

```sh
npm install
```

### Start development server

```sh
npm run dev
```

### Build for production

```sh
npm run build
```

### Type checking

Use the Vue TypeScript checker for `.vue` imports:

```sh
npm run typecheck
```

### Linting

```sh
npm run lint
```

### Run tests

#### Unit tests

```sh
npm run test:unit
```

#### End-to-end tests

```sh
npx playwright install
npm run build
npm run test:e2e
```

For browser-specific or debug options, use the same flags supported by Playwright.
