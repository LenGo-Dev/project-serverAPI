const mongoose = require('mongoose');

const concertSchema = new mongoose.Schema({
    performer: {type: String, required: true},
    genre: {type: String, required: true},
    price: {type: Number, required: true},
    day: {type: Number, required: true},
    image: {type: String, required: true},
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

const ConcertModels = mongoose.model('concerts', concertSchema);


module.exports = {concertSchema, Concert: ConcertModels};
