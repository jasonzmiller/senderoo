const AREA_URL = "https://skimap.org/SkiAreas/index.json";

export const findAllAreas = () =>
    fetch(`{AREA_URL}`)
        .then(response => response.json())

const api = {
    findAllAreas
}

export default api;