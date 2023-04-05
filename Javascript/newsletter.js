const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Route for handling newsletter subscriptions
app.post('/subscribe', (req, res) => {
  const email = req.body.email;

  if (!email) {
    res.status(400).send('Email is required');
    return;
  }

  // Replace this with actual logic to store the email in a database, send a confirmation email, etc.
  console.log(`Subscribed email: ${email}`);
  res.send('Successfully subscribed');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});