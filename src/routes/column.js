const express = require('express');
const connection = require('../databases/db_starter');

const router = express.Router();

router.get('/findAll', (req, res) => {
  const sql = 'SELECT * FROM eventMaker.Column';
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

module.exports = router;
