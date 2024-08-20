const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherdetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found")

search.addEventListener("click", () => {
    const APIkey = ""; // Replace with your actual API key
    const city = document.querySelector(".search-box input").value;

    if (city === " ") {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`)
        .then(response => response.json())
        .then(json => {

            if(json.cod == "404"){
                container.style.height ="324px"
                weatherBox.classList.remove("active")
                weatherdetails.classList.remove("active")
                error404.classList.add("active")
                return
            }

            container.style.height ="500px"
            weatherBox.classList.add("active")
            weatherdetails.classList.add("active")
            error404.classList.remove("active")

            const image = document.querySelector(".weather-box img");
            const temperature = document.querySelector(".weather-box .temperature");
            const description = document.querySelector(".weather-box .description");
            const humidity = document.querySelector(".weather-details .humidity span");
            const wind = document.querySelector(".weather-details .wind span");

            if (json.weather && json.weather.length > 0) {
                switch (json.weather[0].main.toLowerCase()) {
                    case "clear":
                        image.src = "images/clear.png";
                        break;
                    case "rain":
                        image.src = "images/rain.png";
                        break;
                    case "snow":
                        image.src = "images/snow.png";
                        break;
                    case "clouds":
                        image.src = "images/cloud.png";
                        break;
                    case "mist":
                        image.src = "images/mist.png";
                        break
                    case "haze":
                        image.src = "images/mist.png";
                        break;
                    default:
                        image.src = "images/cloud.png";
                        break;
                }
                const celsius = parseInt(json.main.temp) - 273.15;
                temperature.innerHTML = `${celsius.toFixed(1)}<span>°C</span>`;
                description.innerHTML = `${json.weather[0].description}`
                humidity.innerHTML = `${json.main.humidity}%`
                wind.innerHTML = `${parseInt(json.wind.speed)}Km/hr`
            }
            else {
                console.error("Weather data not available or error in response");
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            // Handle API key issues or other errors here
            
        });
});
