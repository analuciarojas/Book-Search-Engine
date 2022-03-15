const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://analuciarojas:Photography0919@cluster0.z4ftm.mongodb.net/googlebooks?retryWrites=true&w=majority' || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
