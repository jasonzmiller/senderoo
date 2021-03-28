import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import weatherService from '../services/weather-service.js';

const WeatherDisplay = (
    {
        weatherForCity,
        findWeatherForCity
    }
) => {
    const [detailed, setDetailed] = useState(false)
    useEffect(() => {
        findWeatherForCity()
    }, [])

    return(
        <>
        <input 
        type="text" 
        placeholder="Search"
        ></input>
        {
            !detailed && 
            <>
                <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                        <div className="card">
                            <div className="card-body"> 
                                <h5 className="card-title">
                                    {weatherForCity.name}
                                </h5>
                                <i onClick={() => {
                                    setDetailed(true)
                                    console.log("Clicked")
                                }}
                                className="fas fa-plus fa-2x float-right"></i>
                                <img src="https://images.unsplash.com/photo-1532124957326-34c5605398?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                                    className="card-img-top" alt="..."/>
                            </div>
                        </div>
                    </div>
            </>
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
                                <li><p>Temperature: {weatherForCity.main.temp} Kelvin</p></li>
                                <li><p>Feels Like: {weatherForCity.main.feels_like} Kelvin</p></li>
                                <li><p>Low: {weatherForCity.main.temp_min} Kelvin</p></li>
                                <li><p>Hight: {weatherForCity.main.temp_max} Kelvin</p></li>
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