const argv = require("yargs")
  .option("n", {
    alias: "numero",
    type: "number",
    demandOption: true,
    describe: "Es la base numerica de la tabla de multiplicar"
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: "Muestra la tabla en consola"
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    default : 10,
    describe: "Hasta que numero ira la tabla de multiplicar"
  })
  .check((argv, options) => {
    if (isNaN(argv.n)) {
      throw "El numero debe ser un número";
    }

    return true;
  }).argv;

module.exports = argv;
