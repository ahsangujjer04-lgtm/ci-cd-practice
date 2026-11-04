# Use official Node.js 24 Alpine image
FROM node:24-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy application source code
COPY app.js ./

# Application listens on port 3000
EXPOSE 3000

# Start Node.js application
CMD ["node", "app.js"]