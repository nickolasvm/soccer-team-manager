// src/app.js
const express = require('express');

const app = express();

// rota http://localhost:3001/
app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

module.exports = app;