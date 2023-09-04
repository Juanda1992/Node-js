const fs = require("fs");
const colors = require('colors');

const tablaMultiplicar = async (numero, listar = false, hasta = 10) => {
  try {
    let tabla = `Tabla del ${numero} \n`;

    for (let i = 1; i <= `${hasta}` ; i++) {
      let multiplicacion = i * numero;
      if (listar) {
        tabla += `${numero} x ${i} = ${multiplicacion} \n`;
      }
    }

    fs.writeFileSync(`./salidas/tabla-${numero}.txt`, tabla);

    console.log(`tabla-${numero}.txt creada`);

    return tabla;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  tablaMultiplicar,
};
