const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://comitymember:vijaycomity%401208@comity.rsd4g.mongodb.net/your-database-name?retryWrites=true&w=majority");
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
