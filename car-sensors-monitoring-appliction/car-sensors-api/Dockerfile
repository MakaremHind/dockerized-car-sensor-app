# Step 1: Build Stage
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code and build Angular app
COPY . .
RUN npm run build -- --configuration=production --output-path=dist

# Step 2: Serve Stage
FROM nginx:1.23.3-alpine

# Copy build files directly into NGINX's root directory
COPY --from=builder /app/dist/browser /usr/share/nginx/html

# Use custom NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
