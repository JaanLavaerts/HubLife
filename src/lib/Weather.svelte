<script>
    import { user } from "../store.js";

    let userValues = {};
    let weatherData = {};

    user.subscribe((value) => {
        userValues = value;
    });

    const getWeather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userValues.place}&appid=7746c5d65c4469cde6ef229343642f51`);
        const data = await response.json();
        weatherData = data;
    }

    $: if (userValues) {
        getWeather();
    }


</script>

<main>
    <p>You live in {userValues.place}</p>

    {#if weatherData.main}
        <p>The weather is {weatherData.weather[0].description}</p>
        <p>The temperature is {Math.round(weatherData.main.temp - 273.15)}°C</p>
        <p>The humidity is {weatherData.main.humidity}%</p>
        <p>The wind speed is {weatherData.wind.speed}m/s</p>
        <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather icon" />
    {/if}

</main>

<style>

</style>