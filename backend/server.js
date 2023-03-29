const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const itemRouter = require('./routes/itemRouter');
const itemHistoryRouter = require('./routes/itemHistoryRouter');
const locationRouter = require('./routes/locationRouter');
const cors = require('cors');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

// Connect to the database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
.then(() => {
  console.log('Connected to database');
})
.catch((error) => {
  console.log('Error connecting to database:', error.message);
});
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Inventory API');
});


app.use('/api/items', itemRouter);
app.use('/api/itemHistory', itemHistoryRouter);
app.use('/api/locations', locationRouter);


// Start the server
app.listen(port, () => console.log(`Listening on port ${port}...`));
