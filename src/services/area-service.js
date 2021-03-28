const AREA_URL = "https://skimap.org/SkiAreas/index.json";

export const findAllAreas = () =>
    fetch("https://skimap.org/SkiAreas/index.json", {
        mode: 'no-cors'
    })
        .then(response => console.log(response))

const api = {
    findAllAreas
}

export default api;