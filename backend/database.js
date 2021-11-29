const mongoose = require('mongoose');
const connectDB = async () => {

    try {
      await mongoose.connect(
        process.env.MONGODB_URI || 'mongodb://localhost:12017/ivanas-bank'),
        {
          useNewUrlParser: true, 
          useUnifiedTopology: true,


        };
      console.log('MongoDB connection established!');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
}

module.exports = connectDB;