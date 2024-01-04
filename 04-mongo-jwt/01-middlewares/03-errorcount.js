const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

app.get('/user', function(req, res) {
  throw new Error("some error");
  // 500 
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

// error handling middleware
app.use(function(err, req, res, next) {
  errorCount++;
  res.status(404).send()
})

module.exports = app;