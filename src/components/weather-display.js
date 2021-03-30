import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import weatherService from '../services/weather-service.js';
import WeatherCard from './weather-card.js';

const WeatherDisplay = (
    {
        weatherForCity,
        findWeatherForCity,
        item="denver"
    }
) => {

    const [searchItem, setSearchItem] = useState(item);

    const [cityList, setCityList] = useState([weatherForCity]);

    useEffect(() => {
        findWeatherForCity(searchItem)
    }, [searchItem])

    return(
        <>
        <input type="text" placeholder="Search" onChange={(e) => setSearchItem(e.target.value)}></input>
        <i className="fas fa-check fa-2x" onClick={() => {
            setCityList((cityList) => [...cityList, weatherForCity])}}></i>
        <div>
        {
            cityList.map(city => <WeatherCard city={city}/>)
        }
        </div>
        </>
    )
}

const stpm = ( state ) => ({
    weatherForCity: state.weatherReducer.weatherForCity
})

const dtpm = ( dispatch ) => ({
    findWeatherForCity: (city) => {
        weatherService.findWeatherForCity(city)
        .then(weather => dispatch({
            type: "FIND_WEATHER_FOR_CITY",
            weather
        }))
    }
})

export default connect ( stpm , dtpm ) ( WeatherDisplay )