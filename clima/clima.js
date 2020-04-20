const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=66f242d67a2fcf162934dd35fe628a71&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}