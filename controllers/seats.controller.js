const {Seat} = require("../models/seat.model");

exports.getAll = async (req, res) => {
  try {
    res.json(await Seat.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getId = async (req, res) => {

  try {
    const seat = await Seat.findById(req.params.id);
    if(!seat) res.status(404).json({ message: 'Not found' });
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }

};

exports.getCreate = async (req, res) => {

  try {

    const {day, seat, client, email} = req.body;
    const newSeat = new Seat({day: day, seat: seat, client: client, email: email});
    await newSeat.save();
    res.json(newSeat);

  } catch (err) {
    res.status(500).json({message: err});
  }

};

exports.getUpdate = async (req, res) => {
  const {day, seat, client, email} = req.body;

  try {
    const udateSeat = await Seat.findById(req.params.id);
    if (udateSeat) {
      udateSeat.day = day;
      udateSeat.seat = seat;
      udateSeat.client = client;
      udateSeat.email = email;
      await udateSeat.save();
      res.json(udateSeat);
    } else res.status(404).json({message: 'Not found...'});
  } catch (err) {
    res.status(500).json({message: err});
  }
};


exports.getDelete = async (req, res) => {

  try {
    const dep = await Seat.findById(req.params.id);
    if(dep) {
      await Seat.deleteOne({ _id: req.params.id });
      res.json(dep);
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }

};

