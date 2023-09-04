const { tablaMultiplicar } = require("./helpers/multiplicar");
const color = require('colors');
const argv = require ('./config/yargs');

console.clear();


// Como recibir argumentos por medio de la consola
// const [, , arg3 ] = process.argv;
// const [, base = 2 ] = arg3.split('=');

console.log(
  tablaMultiplicar(argv.n , argv.l, argv.h)
    .then(nombreArchivo => {
      console.log(nombreArchivo, "creado".rainbow);
    })
    .catch(err => {
      console.log(err);
    })
);

