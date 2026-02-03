const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
    day: {type: Number, required: true},
    seat: {type: Number, required: true},
    client: {type: String, required: true},
    email: {type: String, required: true}
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

const SeatModels = mongoose.model('seats', seatSchema);


module.exports = {seatSchema, Seat: SeatModels};
