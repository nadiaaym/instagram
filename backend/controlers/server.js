var cors = require('cors') 
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const likes = require('./likes.controler');
const posts = require('./posts.controler');
const users = require('./users.controler');

const app = express();

app.use(cors())

const baseDir = path.resolve(__dirname, '../');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(baseDir, 'dist')));

app.use('/api/like', likes);
app.use('/api/post', posts);
// app.use('/api/user', users);

app.get('/', (req, res) => {
  res.sendFile(path.join(baseDir, 'dist', 'index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

/* eslint-disable */
server.listen(port, () => console.log(`API running on localhost:${port}`));
/* eslint-disable */