## Dockerized Node.js Application

This project demonstrates how to containerize a production-style Node.js application using Docker and Docker Compose.

### Features
- Node.js API in a Docker container
- Service isolation
- Environment variable configuration
- Production-ready Docker practices

### Getting Started
```bash
docker build -t node-api .
docker run -p 5000:5000 node-api

### Multi-Container Architecture with Docker Compose

The application uses Docker Compose to orchestrate multiple services, including a Node.js backend and a PostgreSQL database.

A named Docker volume is used to persist database data, ensuring data is not lost when containers are stopped or recreated.

Services communicate over a custom Docker bridge network using service names as hostnames.

### Reverse Proxy with Nginx

An Nginx container is used as a reverse proxy to route incoming HTTP traffic to the Node.js backend service.

Only the Nginx service exposes a public port, while internal services remain isolated within a private Docker network, reflecting real-world production architecture.

### Windows Docker Note

When running on Docker Desktop for Windows, mounting individual configuration files can cause errors.
To ensure cross-platform compatibility, the entire Nginx configuration directory is mounted instead of a single file.

### Docker Hardening

The backend service uses multi-stage Docker builds to reduce image size and improve security.
Containers run as non-root users, and Docker health checks are implemented to monitor service health in real time.
