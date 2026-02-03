const express = require('express');
const cors = require('cors');
const path = require('path');
const socket = require('socket.io');
const mongoose = require('mongoose');

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

const bootstrap = async () => {
  mongoose.connection.on('open', () => console.log('MongoDB connected'));
  mongoose.connection.on('error', (err) => console.log('MongoDB connection is failed', err));

  // await mongoose.connect('mongodb://admin:supersecret@localhost:27017/NewWaveDB?authSource=admin');
  await mongoose.connect('mongodb+srv://lenagotovska_db_user:EjS5U8jifZakNFIV@cluster0.hz11xl3.mongodb.net/NewWaveDB');


  const app = express();
  const server = app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running...');
  });


  const io = socket(server);

  app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));

  app.use((req, res, next) => {
    req.io = io;
    next();
  });

  app.use(express.json());
  app.use(express.urlencoded({extended: false}));

  app.use('/api/testimonials', testimonialsRoutes);
  app.use('/api/concerts', concertsRoutes);
  app.use('/api/seats', seatsRoutes);

  app.use(express.static(path.join(__dirname, '/client/build')));

  io.on('connection', (socket) => {
    console.log('New socket!');
  });

  app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });

  app.use((req, res) => {
    res.status(404).send({message: 'Not found...'});
  })

  // app.listen(process.env.PORT || 8000, () => {
  //   console.log(`Server is running on port: ${process.env.PORT || 8000}`);
  // });
};
bootstrap();


