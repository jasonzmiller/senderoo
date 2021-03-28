const AREA_URL = "https://skimap.org/SkiAreas/index.json";

export const findAllAreas = () =>
    fetch("https://skimap.org/SkiAreas/index.json", {
        mode: 'no-cors',
        method: 'GET',
        headers: {'Content-Type': 'application/json'} 
    })
        .then(response => response.json())

const api = {
    findAllAreas
}

export default api;