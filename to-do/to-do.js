const fs = require('fs');

let arregloTareas = [];

let cargarDb = () => {
  try {
    arregloTareas = require('../db/data.json');
  } catch (error) {
    arregloTareas = [];
  }
};

let guardarDb = () => {
  let data = JSON.stringify(arregloTareas);
  fs.writeFile('./db/data.json', data, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Lista de tareas actualizada exitosamente');
  });
};

let listar = () => {
  cargarDb();
  return arregloTareas;
};

let crear = descripcion => {
  cargarDb();

  let tarea = {
    descripcion,
    estado: false
  };

  if (!arregloTareas.find(x => x.descripcion == descripcion)) {
    arregloTareas.push(tarea);
    guardarDb();
    return 'la tarea se registro exitosamente.';
  }
  return 'La descripcion ingresada ya se encuentra registrada en la base de datos';
};

let actualizar = (descripcion, estado) => {
  cargarDb();
  let idx = arregloTareas.findIndex(x => x.descripcion == descripcion);
  if (idx >= 0) {
    arregloTareas[idx].estado = estado;
    guardarDb();
    return 'la tarea se actualizo exitosamente.';
  }
  return 'La descripcion ingresada no se encuentra registrada en la base de datos';

};

let eliminar = descripcion => {
  cargarDb();
  let idx = arregloTareas.findIndex(x => x.descripcion == descripcion);
  if (idx >= 0) {
    arregloTareas.splice(idx, 1);
    guardarDb();
    return 'la tarea se elimino exitosamente.';
  }
  return 'La descripcion ingresada no se encuentra registrada en la base de datos';
};

module.exports = {
  crear,
  actualizar,
  listar,
  eliminar
};
