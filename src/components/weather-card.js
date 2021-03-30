import React, {useState} from 'react';

const WeatherCard = (
    {
        city
    }
) => {

    const [detailed, setDetailed] = useState(false)

    return(
        <>
        {
           !detailed &&
           <>
           <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                <div className="card">
                    <div className="card-body"> 
                        <h5 className="card-title">
                            {city.name}
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
                                {city.name}
                            </h5>
                            <i onClick={() => {
                                setDetailed(false)
                            }}
                            className="fas fa-minus fa-2x float-right"></i>
                            <img src="https://images.unsplash.com/photo-1532124957326-34c5605398?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                                className="card-img-top" alt="..."/>
                            <ul>
                                <li><p>Temperature: {Math.round(city.main.temp - 273.15)} &deg;C</p></li>
                                <li><p>Feels Like: {Math.round(city.main.feels_like - 275.15)} &deg;C</p></li>
                                <li><p>Low: {Math.round(city.main.temp_min - 275.15)} &deg;C</p></li>
                                <li><p>Hight: {Math.round(city.main.temp_max - 275.15)} &deg;C</p></li>
                            </ul>
                         </div>
                    </div>
                </div>
            </>
        }
        </>
    )
}

export default WeatherCard;