/**
 * npm init
 * Importación del package.json
 * Importación del yargs
 * API:https://rapidapi.com/dev132/api/city-geo-location-lookup
 * request y axios hacen lo misom trabajan con peticiones hacia el servidor
 * axios: trabaja con promesas
 * request: trabaja con callback
 */

//Importación de axios

const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripción de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//lugar.getLugarLatLng(argv.direccion)
//  .then(console.log);

//clima.getClima(40.750000, -74.000000)
//  .then(console.log)
//.catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${coordenadas.direccion} es de ${temperatura}.`;

    } catch (e) {

        return `No se pudo determianr el clima de ${direccion}`;
    }


}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);