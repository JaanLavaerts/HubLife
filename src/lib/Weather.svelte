<script>
    import { user } from "../store.js";
    import ThermometerSun from "./icons/thermometer-sun.svelte";
    import ThermometerSnowflake from "./icons/thermometer-snowflake.svelte";
    import Droplets from "./icons/droplets.svelte";
  import Spinner from "./icons/spinner.svelte";

    let userValues = {};
    let weatherData = {};
    let temp;
    let feels_like;
    let humidity;
    let windSpeed;
    let description;
    let city;
    let country;
    let icon;


    user.subscribe((value) => {
        userValues = value;
    });

    const getWeather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userValues.place}&appid=7746c5d65c4469cde6ef229343642f51`);
        const data = await response.json();
        weatherData = data;
        temp = Math.round(weatherData.main.temp - 273.15);
        feels_like = Math.round(weatherData.main.feels_like - 273.15);
        humidity = weatherData.main.humidity;
        windSpeed = weatherData.wind.speed;
        description = weatherData.weather[0].description;
        city = weatherData.name;
        country = weatherData.sys.country;
        icon = weatherData.weather[0].icon; 
    }

    $: if (userValues) {
        getWeather();
    }


</script>

<main>

    {#if weatherData.main}
        <div class="stats bg-inherit">  
            <div class="stat">
                <img src="http://openweathermap.org/img/wn/{icon}.png" alt="weather icon" class="w-15 h-15"/>
                <div class="stat-value">{city}, {country}</div>
                <div class="stat-desc">{description}</div>
            </div>
            <div class="stat">
                {#if temp > 15}
                <ThermometerSun />
                {:else}
                <ThermometerSnowflake />
                {/if}
                <div class="stat-value text-secondary font-medium">{temp}°C</div>
                <div class="stat-desc">Feels like {feels_like} °C</div>
            </div>
            <div class="stat hidden md:inline-grid">
                <Droplets />
                <div class="stat-value text-secondary font-medium">{humidity}%</div>
                <div class="stat-desc">{windSpeed}km/h wind</div>
            </div>
        </div>
    {:else}
        <Spinner />
    {/if}


</main>