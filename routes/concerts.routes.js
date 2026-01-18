const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => res.json(db.concerts));

router.get('/:id', (req, res) => {
  const item = db.concerts.find(c => c.id == req.params.id);
  res.json(item || { message: 'Not found...' });
});

router.post('/', (req, res) => {
  db.concerts.push({ id: Date.now(), ...req.body });
  res.json({ message: 'OK' });
});

router.put('/:id', (req, res) => {
  const item = db.concerts.find(c => c.id == req.params.id);
  if (item) Object.assign(item, req.body);
  res.json({ message: 'OK' });
});

router.delete('/:id', (req, res) => {
  db.concerts = db.concerts.filter(c => c.id != req.params.id);
  res.json({ message: 'OK' });
});

module.exports = router;
