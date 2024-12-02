
FROM node:lts-alpine

# Set environment variables
ENV NODE_ENV=production

# Set the working directory to /app
WORKDIR /app

# Copy package files and install dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent

# Copy the entire application code
COPY . .

# Expose the application port
EXPOSE 5606

# Run as non-root user
RUN chown -R node /app
USER node

# Start the application
CMD ["npm", "start"]

