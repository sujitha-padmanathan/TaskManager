# Task Manager

## Description

This is a React application that fetches data from a JSON server. To ensure the application works correctly, you need to start the JSON server before running the React app.

## Installation

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Steps to Install

1. Clone the repository:
   ```sh
   git clone https://github.com/sujitha-padmanathan/TaskManager.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Application

### Start JSON Server

Before running the React app, start the JSON server:

```sh
npm run serve
```

This will start the JSON server, making data available to the application.

### Start React Application

Once the JSON server is running, start the React application:

```sh
npm start
```

The app will be accessible at `http://localhost:3000/`.

## JSON Server Configuration

The JSON server runs on `http://localhost:8000` by default. The `db.json` file contains the mock data for the application. Ensure that your API requests point to this server.

## Available Scripts

- `npm start` - Starts the React development server.
- `npm run build` - Builds the React app for production.
- `npm run serve` - Starts the JSON server to serve mock data.
