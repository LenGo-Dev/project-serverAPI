const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => res.json(db.seats));

router.get('/:id', (req, res) => {
  const item = db.seats.find(s => s.id == req.params.id);
  res.json(item || { message: 'Not found...' });
});

router.post('/', (req, res) => {
  db.seats.push({ id: Date.now(), ...req.body });
  res.json({ message: 'OK' });
});

router.put('/:id', (req, res) => {
  const item = db.seats.find(s => s.id == req.params.id);
  if (item) Object.assign(item, req.body);
  res.json({ message: 'OK' });
});

router.delete('/:id', (req, res) => {
  db.seats = db.seats.filter(s => s.id != req.params.id);
  res.json({ message: 'OK' });
});

module.exports = router;
