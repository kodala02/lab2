# Weather App README

### 1. If you received a 401 status code in your API call, the most likely issue is with the API key. A 401 status code typically indicates an unauthorized request. To resolve this issue, the following should be checked:

- Ensure that you have a valid API key for the Tomorrow.io API and that it is correctly stored in the `apiKey` variable in your code.
- Double-check the API key for any typos or errors.
- Confirm that the API key is still valid and has not expired or been revoked.
- Make sure your API key has the necessary permissions to access the requested data from the Tomorrow.io API.

### 2. In this code, the design choices are minimal, and Bootstrap is used to structure the HTML elements and provide basic styling. The design choices are as follows:

- Bootstrap is used for styling and layout, with Bootstrap classes positioning elements, creating the form, and styling buttons for a responsive and visually appealing design.
- The title "Weather App" is centered in the middle of the page using the Bootstrap class `text-center`.
- The latitude and longitude input fields are styled with Bootstrap's `form-control` class for a consistent and clean look.
- The "Get Weather" button is styled as a primary button using `btn btn-primary`.
- The content is placed within a Bootstrap container (`container` class), adding margins and centering the content on the page.

## How to Use the Weather App

- Open the app by visiting the provided Heroku deployment link.
- In the form, enter the latitude and longitude of the location for which you want to retrieve weather information.
- Click the "Get Weather" button.
- The app will make an API call to retrieve weather data and display it on the page.

## Repository Submission

This Weather App code is hosted on [GitHub](git@github.com:kodala02/lab2.git).
This Weather App code is deployed on [Heroku](git@github.com:kodala02/lab2.git).

## Deploy and Run on Heroku

To deploy and run this app on Heroku, follow these steps:

1. Create a Heroku account if you don't have one.
2. Install the Heroku CLI.
3. Log in to your Heroku account using `heroku login`.
4. Create a `Procfile` in your project directory specifying how to run your app.
5. Initialize a Git repository, commit your code, and create a Heroku app using `heroku create`.
6. Push your code to Heroku with `git push heroku main`.
7. Open your app in the browser with `heroku open`.

## Future Improvements

- In the future, we plan to enhance the design of the app by customizing the CSS.
- We may add more weather-related information and forecasts.
- User authentication and data storage for location preferences could be considered as a feature.

