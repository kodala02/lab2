const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
const port = 8002;

app.use(bodyParser.urlencoded({ extended: true }));

const apiKey = 'v9yd0hnuKEkBMM6XFGwvk053KnK8IADe';

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/weather', (req, res) => {
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    const apiUrl = `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperature&timesteps=1h&units=metric&apikey=${apiKey}`;

    https.get(apiUrl, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            if (response.statusCode === 200) {
                const weatherData = JSON.parse(data);

                const temperature = weatherData.data.timelines[0].intervals[0].values.temperature;
                const humidity = weatherData.data.timelines[0].intervals[0].values.humidity;
                const precipitationProbability = weatherData.data.timelines[0].intervals[0].values.precipitationProbability;
                const weatherCode = weatherData.data.timelines[0].intervals[0].values.weatherCode;


                res.send(`
                    Temperature: ${temperature}°C<br>
                    Humidity: ${humidity}%<br>
                    Precipitation Probability: ${precipitationProbability}%<br>
                    Weather Code: ${weatherCode}
                `);
            } else {
                res.send('Error fetching weather data.');
            }
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
});
