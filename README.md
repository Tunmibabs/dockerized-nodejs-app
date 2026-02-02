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
