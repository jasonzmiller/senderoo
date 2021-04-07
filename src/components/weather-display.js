import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import weatherService from '../services/weather-service.js';
import WeatherCard from './weather-card.js';
import WeatherSearchResult from './weather-search-result.js';

const WeatherDisplay = (
    {
        weatherForCity,
        findWeatherForCity,
        item="denver"
    }
) => {

    const [searchItem, setSearchItem] = useState(item);

    const [cityList, setCityList] = useState([weatherForCity]);

    const [didSearch, setDidSearch] = useState(false);

    useEffect(() => {
        findWeatherForCity(searchItem)
    }, [searchItem])

    return(
        <>
        <div className="input-group rounded">
            <input className="form-control rounded" 
                   type="text" 
                   placeholder="Add Location" 
                   onChange={(e) => setSearchItem(e.target.value)}/>
            {/* <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-check fa-2x" onClick={() => {
                    setCityList((cityList) => [weatherForCity, ...cityList])}}></i>
            </span> */}
            <span className="input-group-text border-0">
                <i className="fas fa-search fa-2x" onClick={() => {
                    setDidSearch(true)}}></i>
            </span>
        </div>
        <div className="row">
        {
            cityList.map(city => <WeatherCard city={city}/>)
        }
        </div>
        <>
        {
            didSearch &&
            <WeatherSearchResult result={weatherForCity} 
                                setDidSearch={setDidSearch} 
                                setCityList={setCityList} 
                                weatherForCity={weatherForCity} 
                                cityList={cityList}/>
        }
        </>
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