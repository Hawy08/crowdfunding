FROM node:22 


# Set working directory
WORKDIR /app

# Install dependencies separately for better caching
COPY package*.json ./
RUN npm install

# Copy rest of the source files
COPY . .

# Expose port (optional: only if you're running a local dev server)
EXPOSE 3001

# Default command: leave it empty or customize based on your use case
CMD ["npm", "run", "dev"]
