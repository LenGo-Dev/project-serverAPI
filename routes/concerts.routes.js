const express = require('express');
const router = express.Router();

const ConcertsController = require('../controllers/concerts.controller');


router.get('/', ConcertsController.getAll);

router.get('/:id', ConcertsController.getId);

router.post('/', ConcertsController.getCreate);

router.put('/:id', ConcertsController.getUpdate);

router.delete('/:id', ConcertsController.getDelete);

module.exports = router;
