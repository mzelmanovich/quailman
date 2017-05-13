const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));

app.use('/vendor', express.static(path.join(__dirname, '..', 'node_modules')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
app.use(favicon(path.join(__dirname, '..', 'favicon.ico')));
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'index.html')));

const apiRoutes = require('./api');
app.use('/api', apiRoutes);

app.get('/index', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'index.html')));

module.exports = app;
