// Imports
const express = require('express');
const axios = require('axios');
//require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// API route to fetch weather data
app.get('/weather', async (req, res) => {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
        return res.json({ error: 'Please provide latitude and longitude.' });
    }

    try {
        //const apiKey = process.env.API_KEY;
        const apiKey = 'MY_API_KEY';
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        const response = await axios.get(url);
        const weatherData = response.data;

        res.json({
            name: weatherData.name,
            temp: weatherData.main.temp,
            description: weatherData.weather[0].description,
            humidity: weatherData.main.humidity
        });
    } catch (error) {
        res.json({ error: 'Error fetching weather data, please try again.' });
    }
});

app.get('/api/weather', async (req, res) => {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
        return res.status(400).json({ error: 'Please provide latitude and longitude.' });
    }

    try {
        //const apiKey = process.env.API_KEY;
        const apiKey = 'MY_API_KEY';
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        const response = await axios.get(url);
        const weatherData = response.data;

        res.json({
            name: weatherData.name,
            temp: weatherData.main.temp,
            description: weatherData.weather[0].description,
            humidity: weatherData.main.humidity,
            wind_speed: weatherData.wind.speed,
            country: weatherData.sys.country,
            coordinates: {
                lat: weatherData.coord.lat,
                lon: weatherData.coord.lon
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching weather data, please try again.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
