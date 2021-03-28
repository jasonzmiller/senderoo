import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import weatherService from '../services/weather-service.js';

const WeatherDisplay = (
    {
        weatherForCity,
        findWeatherForCity
    }
) => {

    useEffect(() => {
        findWeatherForCity()
    }, [])

    return(
        <>
        <p>{JSON.stringify(weatherForCity)}</p>
        </>
    )
}

const stpm = ( state ) => ({
    weatherForCity: state.weatherReducer.weatherForCity
})

const dtpm = ( dispatch ) => ({
    findWeatherForCity: (city) => {
        weatherService.findWeatherForCity(city)
        .then(weatherForCity => dispatch({
            type: "FIND_WEATHER_FOR_CITY",
            weatherForCity
        }))
    }
})

export default connect ( stpm , dtpm ) ( WeatherDisplay )