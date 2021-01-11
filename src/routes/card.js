const express = require('express');
const connection = require('../databases/db_starter');

const router = express.Router();

router.post('/add', (req, res) => {
  const { columnId, title, pos, content, author } = req.body;
  const params = [columnId, title, pos, content, author];
  const sql =
    'INSERT INTO eventmaker.Card(column_id, title, pos, content, author) VALUE(?, ?, ?, ?, ?)';
  connection.query(sql, params, (err, rows) => {
    if (err) console.log(err);
    res.json({
      rows,
    });
  });
});

router.post('/delete', (req, res) => {
  const { cardId } = req.body;
  const sql = `DELETE FROM eventmaker.Card WHERE card_id = ${cardId}`;
  connection.query(sql, (err, result) => {
    if (err) console.log(err);
    res.json({
      result,
    });
  });
});

router.post('/update/title', (req, res) => {
  const { cardId, title } = req.body;
  const params = [cardId, title];
  const sql = 'UPDATE eventmaker.Card SET title = ? WhERE card_id=?';
  connection.query(sql, params, (err, rows) => {
    if (err) console.log(err);
    res.json({
      rows,
    });
  });
});

router.post('update/pos', (req, res) => {
  const { cardId, pos } = req.body;
  const params = [cardId, pos];
  const sql = 'UPDATE eventmaker.Card SET pos = ? WHERE card_id=?';
  connection.query(sql, params, (err, rows) => {
    if (err) console.log(err);
    res.json({
      rows,
    });
  });
});

router.post('update/content', (req, res) => {
  const { cardId, content } = req.body;
  const params = [cardId, content];
  const sql = 'UPDATE eventmaker.Card SET content = ? WHERE card_id=?';
  connection.query(sql, params, (err, rows) => {
    if (err) console.log(err);
    res.json({
      rows,
    });
  });
});

module.exports = router;
