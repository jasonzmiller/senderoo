const AREA_URL = "https://skimap.org/SkiAreas/index.json";

export const findAllAreas = () =>
    fetch("https://skimap.org/SkiAreas/index.json", {
        mode: 'no-cors'
    })
        .then(response => response.json())

const api = {
    findAllAreas
}

export default api;