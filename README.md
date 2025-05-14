# cource-online

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Run with Docker

This project includes Docker and Docker Compose support for building and running the Vue 3 + Vite application in a containerized environment.

### Requirements

- Docker (latest version recommended)
- Docker Compose (v2 or later)

### Project-specific Details

- **Node.js version:** 22.13.1 (used for build stage)
- **Nginx:** stable-alpine (used for serving the built app)
- **Exposed port:** `80` (Nginx default, mapped to host)
- **No external dependencies** (such as databases) are required by default
- **Environment variables:** None required by default, but you may uncomment the `env_file` line in `docker-compose.yaml` if you wish to use a `.env` file

### Build and Run

To build and start the application using Docker Compose:

```sh
docker compose up --build
```

This will:

- Build the app using Node.js 22.13.1
- Serve the production build with Nginx on [http://localhost:80](http://localhost:80)

### Customization

- If you need to customize the Nginx configuration, provide an `nginx.conf` file and uncomment the relevant lines in the `Dockerfile` and `docker-compose.yaml`.
- To use environment variables, create a `.env` file in the project root and uncomment the `env_file` line in `docker-compose.yaml`.

---
