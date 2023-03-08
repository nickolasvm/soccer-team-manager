// src/app.js
const express = require('express');

const app = express();

// rota http://localhost:3001/
// const OK = 200;
// const INTERNAL_SERVER_ERROR = 500;
// const NOT_FOUND = 404;

// app.get('/', (req, res) => res.status(OK).json({ message: 'Olá Mundo!' }));

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/teams', (req, res) => res.status(200).json({ teams }));

module.exports = app;