const MAIN_URL = "api.openweathermap.org/data/2.5"
const CITY_URL = "api.openweathermap.org/data/2.5/weather?q=denver&appid=01911f7b486c0e1468d2f43de9366608";
const APPID = "appid=01911f7b486c0e1468d2f43de9366608"

// `${MAIN_URL}/weather?q=${city}&${APPID}`

export const findWeatherForCity = (city) => 
    fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=01911f7b486c0e1468d2f43de9366608`, 
    {
        mode: 'no-cors',
        method: 'GET',
        headers: {
            'content-type' : 'application/json'
        }
    })
        .then(response => response.json())

const api = {
    findWeatherForCity
}

export default api