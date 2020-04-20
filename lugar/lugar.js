const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '4cd2efa0b1msh8c8caaaa0aa5b2fp18a67cjsneb0560f682e7' }
    });

    /**
     * Petición que va ser get en este caso
     * si se resuleve correctamente then
     * si no catch
     * */

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    console.log(lat);

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}