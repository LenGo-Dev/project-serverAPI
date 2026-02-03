const {Testimonial } = require("../models/testimonial.model");

exports.getAll = async (req, res) => {
  try {
    res.json(await Testimonial.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getId = async (req, res) => {

  try {
    const dep = await Testimonial.findById(req.params.id);
    if(!dep) res.status(404).json({ message: 'Not found' });
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }

};

exports.getCreate = async (req, res) => {

  try {

    const {author, text} = req.body;
    const newTestimonial = new Testimonial({author: author, text: text});
    await newTestimonial.save();
    res.json(newTestimonial);

  } catch (err) {
    res.status(500).json({message: err});
  }

};

exports.getUpdate = async (req, res) => {
  const {author, text} = req.body;

  try {
    const testi = await Testimonial.findById(req.params.id);
    if (testi) {
      testi.author = author;
      testi.text = text;
      await testi.save();
      res.json(testi);
    } else res.status(404).json({message: 'Not found...'});
  } catch (err) {
    res.status(500).json({message: err});
  }
};

  exports.getDelete = async (req, res) => {

    try {
      const dep = await Testimonial.findById(req.params.id);
      if(dep) {
        await Testimonial.deleteOne({ _id: req.params.id });
        res.json(dep);
      }
      else res.status(404).json({ message: 'Not found...' });
    }
    catch(err) {
      res.status(500).json({ message: err });
    }

  };


