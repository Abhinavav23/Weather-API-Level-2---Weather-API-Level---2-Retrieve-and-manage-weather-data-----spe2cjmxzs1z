const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const WeatherData = require('../models/weatherDataModel');
const fs = require('fs');
const path = require('path');

dotenv.config();

const dataFilePath = path.join(__dirname, '../data', 'data.json');
// console.log('__dirname', __dirname);
// console.log('dataFilePath', dataFilePath);
const weatherData = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedWeatherData = async () => {
  try {
    // delete many will delete all the data 
    await WeatherData.deleteMany();
    // insert multiple data in one go
    // insertOne --> creates a new record
    // insertMany --> creates multiple record
    await WeatherData.insertMany(weatherData);
    console.log('Weather data seeded successfully');
  } catch (error) {
    console.error('Error seeding weather data:', error.message);
  }
};

// seedWeatherData();

app.listen(process.env.PORT, () => console.log('Server running......'));
