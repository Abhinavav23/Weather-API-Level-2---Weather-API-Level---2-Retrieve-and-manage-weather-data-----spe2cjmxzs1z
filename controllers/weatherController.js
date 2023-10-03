const WeatherData = require("../models/weatherDataModel");

const getWeatherByCityName = async (req, res) => {
  const cityName = req.params.cityName;
  console.log("cityName", cityName);
  try {
    // TODO: Implement logic to retrieve weather data by city name
    const weatherData = await WeatherData.findOne({ cityName });
    // Example response when data is found:
    if (weatherData) {
      res.status(200).json({ weatherData });
    } else {
      // Example response when data is not found:
      res
        .status(404)
        .json({ message: "Weather data not found for the given city" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getWeatherByZipCode = async (req, res) => {
  const zipCode = req.params.zipCode;
  console.log("zipCode", zipCode);
  try {
    // TODO: Implement logic to retrieve weather data by zip code
    const weatherData = await WeatherData.findOne({ zipCode });

    if (weatherData) {
      // Example response when data is found:
      res.status(200).json({ weatherData });
    } else {
      // Example response when data is not found:
      res
        .status(404)
        .json({ message: "Weather data not found for the given zip code" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const postWeatherAlert = async (req, res) => {
  const { cityName, humidity, weatherDescription, temperature, zipCode } =
    req.body;

    console.log('req.body', req.body);
  try {
    // TODO: Implement logic to post weather alert
    const newAlert = await WeatherData.create({ cityName, humidity, weatherDescription, temperature, zipCode })
    // Example response when alert is posted successfully:
    res.status(201).json({ message: 'Weather alert posted successfully', alert: newAlert });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getAllWeatherData = async (req, res) => {
  try{
    const weatherData = await WeatherData.find();
    res.status(200).json({status: 'success', records: weatherData})
  }catch(err){
    res.status(404).json({status: 'failed'})
  }
}

module.exports = {
  getWeatherByCityName,
  getWeatherByZipCode,
  postWeatherAlert,
  getAllWeatherData
};
