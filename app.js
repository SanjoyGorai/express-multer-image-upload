import express from 'express';
import uploadRoutes from './routes/uploadRoutes.js';

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api/uploads', uploadRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
