// put date as project presenting date sept 13 2023
const apiUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/halifax/2024-05-03/2024-05-03?unitGroup=metric&key=BUMR2N3BKDDBVH4CTGFEK2MHL&contentType=json";
//Date set to wedding date
async function getWeatherData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // consts to pull weather info
        const cityName = data.resolvedAddress;
        const temperature = data.days[0].temp;
        const weatherDescription = data.days[0].conditions;
        const requestedDate = data.days[0].datetime;

        // Determine the emoji based on weather conditions sunny or clear = smiley else others are frowny
        let emoji = "";
        if (weatherDescription.includes("Sunny") || weatherDescription.includes("Clear")) {
            emoji = "😄"; 
        } else {
            emoji = "😔"; 
        }

        // Display the weather for location, date, temp, condition
        const weatherWidget = document.getElementById("weather-widget");
        weatherWidget.innerHTML = `
            <h2>${cityName}</h2>
            <p>Save the Date: ${requestedDate}</p>
            <p>It will be: ${temperature}&#8451;</p>
            <p>Condition: ${weatherDescription} ${emoji}</p>
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Fetch and display weather data on page load
window.addEventListener("load", getWeatherData);
