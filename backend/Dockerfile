# ---------- Build Stage ----------
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# ---------- Production Stage ----------
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy only what we need from builder
COPY --from=builder /usr/src/app ./

# Use non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
CMD wget -qO- http://localhost:5000/health || exit 1


CMD ["npm", "start"]
