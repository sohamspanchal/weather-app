async function searchWeather() {
    let city = document.getElementById('place').value;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=7276a3cd56f4420e98282450240506&q=${city}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (response.ok) {
            document.getElementById('temp').innerText = `${data.current.temp_c}°C`;
            document.getElementById('placeof').innerText = `Today's Weather in ${city.charAt(0).toUpperCase() + city.slice(1)}`;

            let weatherIcon = document.getElementById('weather-icon');
            weatherIcon.src = data.current.condition.icon;
            weatherIcon.style.display = 'block';
            document.getElementById('error-message').innerText = '';
        } else {
            console.log("Error occurred");
            document.getElementById('weather-icon').style.display = 'none';
            document.getElementById('error-message').innerText = 'Error fetching weather data.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('error-message').innerText = 'Error fetching weather data.';
        document.getElementById('weather-icon').style.display = 'none';
    }
}
