# Use an official Node.js runtime as a base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Define the command to run your app
CMD ["npm", "run", "dev"]
