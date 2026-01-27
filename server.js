require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Import routes
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const commentRoutes = require('./routes/commentRoutes');
const noteRoutes = require('./routes/noteRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const imageRoutes = require('./routes/imageRoutes');
const multiImageRoutes = require('./routes/multiImageRoutes');

app.use(express.json());

// Use routes
app.use('/api', userRoutes);
app.use('/api', blogRoutes);
app.use('/api', commentRoutes);
app.use('/api', noteRoutes);
app.use('/api', feedbackRoutes);
app.use('/api', imageRoutes);
app.use('/api', multiImageRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});