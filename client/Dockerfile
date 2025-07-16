
FROM node:22.17.0-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the full project
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Production
FROM node:22.17.0-alpine AS runner

# Set environment
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
