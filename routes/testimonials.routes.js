const express = require('express');
const router = express.Router();

const TestimonialsController = require('../controllers/testimonials.controller');


router.get('/', TestimonialsController.getAll);

router.get('/:id', TestimonialsController.getId);

router.post('/', TestimonialsController.getCreate);

router.put('/:id', TestimonialsController.getUpdate);

router.delete('/:id', TestimonialsController.getDelete);

module.exports = router;
