const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const emailRoutes = require('./routes/emailRoutes');

const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/emails', emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
