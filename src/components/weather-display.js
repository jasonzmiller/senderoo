import React, {useEffect} from 'react';
import {connect} from 'react-redux';

const WeatherDisplay = (
    {
        weatherForCity
    }
) => {
    return(
        <>
        <h1>{weatherForCity.weather.main}</h1>
        </>
    )
}

const stpm = ( state ) = ({
    weatherForCity: state.weatherReducer.weatherForCity
})

const dtpm = ( dispatc ) = ({
    findWeatherForCity: (city) => {
        weatherService.findWeatherForCity(city)
            .then(weatherForCity => dispatchEvent({
                type: "FIND_WEATHER_FOR_CITY",
                weatherForCity
            }))
    }
})

export default connect ( stpm, dtpm ) ( WeatherDisplay );