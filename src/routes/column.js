const express = require('express');
const connection = require('../databases/db_starter');

const router = express.Router();

router.get('/findAll', (req, res) => {
  const sql = 'SELECT * FROM eventmaker.Column';
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

router.post('/add', (req, res) => {
  const { title, pos } = req.body;
  const params = [title, pos];
  const sql = 'INSERT INTO eventmaker.Column(title, pos) VALUES(?, ?)';

  connection.query(sql, params, (err, rows) => {
    if (err) console.log(err);
    res.json({
      rows,
    });
  });
});

router.post('/delete', (req, res) => {
  const { columnId } = req.body;
  const sql = `DELETE FROM eventmaker.Column WHERE column_id = ${columnId}`;
  connection.query(sql, (err, result) => {
    if (err) console.log(err);
    res.json({
      result,
    });
  });
});

router.post('/update/title', (req, res) => {
  const { columnId, title } = req.body;
  const params = [title, columnId];
  const sql = 'UPDATE eventmaker.Column SET title= ? WHERE column_id=?';
  connection.query(sql, params, (err, rows) => {
    if (err) console.log(err);
    res.json({
      rows,
    });
  });
});

router.post('/update/pos', (req, res) => {
  const { columnId, pos } = req.body;
  const params = [pos, columnId];
  const sql = 'UPDATE eventmaker.Column SET pos= ? WHERE column_id=?';
  connection.query(sql, params, (err, rows) => {
    if (err) console.log(err);
    res.json({
      rows,
    });
  });
});

module.exports = router;
