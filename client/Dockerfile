# Use Node.js base image
FROM node:22

# Set working directory inside the container
WORKDIR /app

# Copy dependency files first (for efficient caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose Vite default port
EXPOSE 5173

# Command to run the Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
