const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    author: {type: String, required: true},
    text: {type: String, required: true}
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        delete ret.__v;
        return ret;
      },
    },
  }
);

const TestimonialModels = mongoose.model('testimonials', testimonialSchema);


module.exports = {testimonialSchema, Testimonial: TestimonialModels};
