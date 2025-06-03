const express = require('express');

const app = express();

const PORT = 3000; // You can change this to any port number you prefer

// Define a route to send "Hello" response
app.use('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

   