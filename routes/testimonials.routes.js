const express = require('express');
const { v4: uuidv4 } = require('uuid');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => res.json(db.testimonials));

router.get('/:id', (req, res) => {
  const item = db.testimonials.find(t => t.id === req.params.id);
  res.json(item || { message: 'Not found...' });
});

router.post('/', (req, res) => {
  const { author, text } = req.body;
  db.testimonials.push({ id: uuidv4(), author, text });
  res.json({ message: 'OK' });
});

router.put('/:id', (req, res) => {
  const item = db.testimonials.find(t => t.id === req.params.id);
  if (item) {
    item.author = req.body.author;
    item.text = req.body.text;
  }
  res.json({ message: 'OK' });
});

router.delete('/:id', (req, res) => {
  const index = db.testimonials.findIndex(t => t.id === req.params.id);
  if (index !== -1) db.testimonials.splice(index, 1);
  res.json({ message: 'OK' });
});

module.exports = router;
