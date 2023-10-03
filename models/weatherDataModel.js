const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
  // City name (Type: String, Required: true)
  cityName: {
    type: String,
    required: true
  },
  // Temperature in degrees (Type: Number, Required: true)
  temperature: {
    type: Number,
    required: true
  },
  // Zip code (Type: String, Required: true)
  zipCode: {
    type: String,
    required: true
  },
  // Humidity percentage (Type: Number, Required: true)
  humidity: {
    type: Number,
    required: true
  },
  // Weather description (Type: String, Required: true)
  weatherDescription: {
    type: String,
    required: true
  }
});

const WeatherData = mongoose.model('WeatherData', weatherDataSchema);

module.exports = WeatherData;
