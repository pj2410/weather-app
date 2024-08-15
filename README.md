# Weather App 

**Features:**

* User enters a location
* Fetches weather data using OpenWeatherMap API
* Displays weather information including:
    * Temperature (°C)
    * Weather description (e.g. clear, rain, snow)
    * Humidity (%)
    * Wind speed (Km/hr)
* Handles location not found errors

**Structure:**

* The code consists of three main files:
    * `index.html`: Contains the HTML structure of the application.
    * `style.css`: Defines the styles for the application.
    * `script.js`: Handles the Javascript logic for fetching and displaying weather data.

**Getting Started:**

1. Ensure you have the required images (`clear.png`, `rain.png`, `snow.png`, `cloud.png`, `mist.png`, `404.png`) in the `images` folder.
2. Open `index.html` in a web browser to run the application.

**How it works:**

1. When the user enters their location and clicks the search button, the Javascript code fetches weather data from the OpenWeatherMap API.
2. Based on the retrieved data, the app displays the weather information and the corresponding weather icon.
3. If the location is not found, the app displays an error message.

**Dependencies:**

* OpenWeatherMap API: https://openweathermap.org/

**Icons:**

* Boxicons: https://boxicons.com/ (Used for icons)
