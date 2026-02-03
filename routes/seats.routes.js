const express = require('express');
const router = express.Router();

const SeatsController = require('../controllers/seats.controller');


router.get('/', SeatsController.getAll);

router.get('/:id', SeatsController.getId);

router.post('/', SeatsController.getCreate);

router.put('/:id', SeatsController.getUpdate);

router.delete('/:id', SeatsController.getDelete);

module.exports = router;