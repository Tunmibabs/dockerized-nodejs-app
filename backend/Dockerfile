# Use lightweight Node image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install --production

# Copy app source
COPY . .

# Expose port
EXPOSE 5000

# Start app
CMD ["npm", "start"]
