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
mongoose.connect('mongodb://0.0.0.0:27017/contact', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define schema and model for form submissions
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  feedback: String
});
const Contact = mongoose.model('Contact', contactSchema);

// Define route for handling form submissions
app.post('/submit', (req, res) => {
  const { name, email, feedback } = req.body;
  const newContact = new Contact({ name, email, feedback });
    newContact.save()
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
