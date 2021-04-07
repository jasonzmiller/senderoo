import React from 'react';

const WeatherSearchResult = (
    {
        result,
        setDidSearch,
        setCityList,
        weatherForCity
    }) => {
    return(
        <>
        <div className="row">
            <div className="col-8">
                {result.name}
            </div>
            <div className="col-4">
                <i className="fas fa-plus" 
                    onClick={() => {
                        setCityList((cityList) => [weatherForCity, ...cityList])
                        setDidSearch(false)
                    }}></i>
            </div>
        </div>
        </>
    )
}

export default WeatherSearchResult;