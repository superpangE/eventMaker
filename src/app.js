const express = require('express');
const path = require('path');
const connection = require('./databases/db_starter');
const columnRouter = require('./routes/column');
const cardRouter = require('./routes/card');

require('dotenv').config();

const app = express();
connection.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/column', columnRouter);
app.use('/card', cardRouter);

app.listen(process.env.PORT);
