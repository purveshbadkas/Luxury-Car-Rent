const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
app.use(cors()) 
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/carSelectionDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define Car Selection model
const carSelectionSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  pickupLocation: String,
  pickupTime: String,
  returnLocation: String,
  returnTime: String,
  comments: String
});
const CarSelection = mongoose.model('CarSelection', carSelectionSchema);

// Handle form submission
app.post('/submit', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    pickupLocation,
    pickupTime,
    returnLocation,
    returnTime,
    comments
  } = req.body;

  // Create a new CarSelection document
  const newCarSelection = new CarSelection({
    firstName,
    lastName,
    email,
    phone,
    pickupLocation,
    pickupTime,
    returnLocation,
    returnTime,
    comments
  });

  // Save the document to the database
  newCarSelection.save()
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
