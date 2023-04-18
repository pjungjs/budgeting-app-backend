const express = require('express');
const cors = require('cors');
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//controllers
const txnController = require('./controllers/txnController.js');

//routes
app.use('/transactions', txnController);

app.get('/', (req, res) => {
  res.send("Welcome to the Budgeting App!");
})

app.get('*', (req, res) => {
  res.status(404).send("Page Not Found");
})

module.exports = app;