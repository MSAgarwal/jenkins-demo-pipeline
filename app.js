// Import Express framework and routes module
import express from 'express';
import routes from './source/routes/route.js';

// Initialize Express app
const app = express();

// Define constants for host and port
const PORT = 3000;
const HOST = '0.0.0.0';

// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json());                          // For parsing application/json
app.use(express.urlencoded({ extended: true }));  // For parsing application/x-www-form-urlencoded

// Register application routes
routes(app);

// Start the server and listen on the specified port and host
app.listen(PORT, HOST, () => {
  console.log(`✅ Server started on http://${HOST}:${PORT}`);
});
