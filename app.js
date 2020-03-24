const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crear, actualizar, listar, eliminar } = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    let dataCrear = crear(argv.descripcion);
    console.log(dataCrear);
    break;
  case 'listar':
    let dataListar = listar();
    for (let tarea of dataListar) {
        console.log('==========Por Hacer=========='.green);
        console.log(tarea.descripcion);
        console.log('Estado: ',tarea.estado);
        console.log('============================='.green);
    }
    break;
  case 'actualizar':
    let dataActualizar = actualizar(argv.descripcion, argv.completado);
    console.log(dataActualizar);
    break;
  case 'eliminar':
    let dataEliminar = eliminar(argv.descripcion);
    console.log(dataEliminar);
    break;
  default:
    console.log('comando no reconocido');
    break;
}
