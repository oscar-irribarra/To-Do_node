const descripcion = {
    demand: true,
    alias: 'd',
    descripcion: 'Define la Descripcion de la tarea a crear'
}

const completado = {
    alias: 'c',
    default: true,
    descripcion: 'Define el estado de la tarea, por defecto es true'
}

const argv = require('yargs')
                .command('crear', 'Crear tarea', descripcion)
                .command('actualizar', 'Actualizar estado de tarea', {descripcion, completado}) 
                .command('eliminar', 'Elimina una tarea', descripcion )
                .help().argv;


module.exports = {
    argv
}