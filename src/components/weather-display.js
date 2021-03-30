import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import weatherService from '../services/weather-service.js';
import WeatherCard from './weather-card.js';

const WeatherDisplay = (
    {
        weatherForCity,
        findWeatherForCity,
        item=""
    }
) => {

    const [detailed, setDetailed] = useState(false)

    const [searchItem, setSearchItem] = useState(item);

    const [cityList, setCityList] = useState([weatherForCity]);

    useEffect(() => {
        findWeatherForCity("denver")
    }, [])

    return(
        <>
        <input type="text" placeholder="Search" onChange={(e) => setSearchItem(e.target.value)}></input>
        <i className="fas fa-check fa-2x" onClick={() => {
            findWeatherForCity(searchItem)
            setCityList((cityList) => [...cityList, weatherForCity]) 
            console.log(cityList)}}></i>
        {
            !detailed &&
            cityList.map(city => 
                <WeatherCard weatherForCity={weatherForCity} setDetailed={setDetailed}/>) 
        }
        {
            detailed &&
            <>
                <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                    <div className="card">
                        <div className="card-body"> 
                            <h5 className="card-title">
                                {weatherForCity.name}
                            </h5>
                            <i onClick={() => {
                                setDetailed(false)
                            }}
                            className="fas fa-minus fa-2x float-right"></i>
                            <img src="https://images.unsplash.com/photo-1532124957326-34c5605398?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                                className="card-img-top" alt="..."/>
                            <ul>
                                <li><p>Temperature: {Math.round(weatherForCity.main.temp - 273.15)} &deg;C</p></li>
                                <li><p>Feels Like: {Math.round(weatherForCity.main.feels_like - 275.15)} &deg;C</p></li>
                                <li><p>Low: {Math.round(weatherForCity.main.temp_min - 275.15)} &deg;C</p></li>
                                <li><p>Hight: {Math.round(weatherForCity.main.temp_max - 275.15)} &deg;C</p></li>
                            </ul>
                         </div>
                    </div>
                </div>
            </>
        }
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