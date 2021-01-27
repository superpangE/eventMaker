const express = require('express');
const connection = require('../databases/db_starter');

const router = express.Router();

router.get('/findAll', (req, res) => {
  const sql = 'SELECT * FROM eventmaker.Card';
  connection.query(sql, (error, rows) => {
    if (error) {
      console.log('DB 접근 실패!');
      throw error;
    }
    res.status(200).json({
      rows,
    });
  });
});

router.post('/add', (req, res) => {
  const { columnId, title, pos, content, author } = req.body;
  const params = [columnId, title, pos, content, author];

  const sql =
    'INSERT INTO eventmaker.Card(column_id, title, pos, content, author) VALUE(?, ?, ?, ?, ?)';
  connection.query(sql, params, (err, rows) => {
    if (err) console.log(err);
    res.json({
      cardId: rows.insertId,
    });
  });
});

router.post('/delete', (req, res) => {
  const { cardId } = req.body;
  const sql = `DELETE FROM eventmaker.Card WHERE card_id = ${cardId}`;
  connection.query(sql, (err, result) => {
    if (err) console.log(err);
    // console.log(result);
    res.json({
      result,
    });
  });
});

router.get('/counter', (req, res) => {
  const sql = 'SELECT COUNT(*) as NUM FROM eventmaker.Column';
  connection.query(sql, (error, rows) => {
    if (error) {
      console.log('DB 접근 실패!');
      throw error;
    }
    res.status(200).json(rows[0].NUM);
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
