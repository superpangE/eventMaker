const express = require('express');
const path = require('path');
const connection = require('./databases/db_starter');
const columnRouter = require('./routes/column');

require('dotenv').config();

const app = express();
connection.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/column', columnRouter);

app.listen(process.env.PORT);
