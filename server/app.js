const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const app = express();

app.use('/vendor', express.static(path.join(__dirname, '..', 'node_modules')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
app.use(favicon(path.join(__dirname, '..', 'favicon.ico')));
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'index.html')));
app.get('/index', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'index.html')));
module.exports = app;
