// put date as project presenting date sept 13 2023
const apiUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/halifax/2023-09-13/2023-09-13?unitGroup=metric&key=BUMR2N3BKDDBVH4CTGFEK2MHL&contentType=json";

async function getWeatherData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract relevant weather information
        const cityName = data.resolvedAddress;
        const temperature = data.days[0].temp;
        const weatherDescription = data.days[0].conditions;
        const requestedDate = data.days[0].datetime;

        // Determine the emoji based on weather condition
        let emoji = "";
        if (weatherDescription.includes("Sunny")) {
            emoji = "😄"; 
        } else {
            emoji = "😔"; 
        }

        // Display the weather information with emoji
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
