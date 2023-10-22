const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path'); // Add the 'path' module

const app = express();
const port = 8002;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files including your JavaScript file
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const weatherApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9b144ba584msh39799d79b268195p12f441jsnb0814c1a9fdb',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
};

// Handle the POST request from the HTML form
app.post('/get-weather', async (req, res) => {
    const userCity = req.body.city; // Get the user-entered city from the form

    // Modify the weatherApiOptions URL to include the user's city
    weatherApiOptions.url = `https://open-weather13.p.rapidapi.com/city/${userCity}`;

    try {
        // Make the API request with the user-specified city
        const response = await axios.request(weatherApiOptions);
        const weatherData = response.data;
        res.json(weatherData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching weather data.' });
    }
});
