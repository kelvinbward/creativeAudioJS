FROM node:20-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./
RUN npm install

# Copy the rest
COPY . .

EXPOSE 5173

# Note: --host 0.0.0.0 is vital for WSL to expose the port to Windows
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]