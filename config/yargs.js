const argv = require('yargs')
                .command('crear', 'Crear tarea', {
                    descripcion: {
                        demand: true,
                        alias: 'd'
                    }
                })
                .command('actualizar', 'Actualizar estado de tarea', {
                    descripcion: {
                        demand: true,
                        alias: 'd'
                    } ,
                    completado:{
                        alias: 'c',
                        default: true
                    }
                }) 
                .command('eliminar', 'Elimina una tarea', {
                    descripcion: {
                        demand: true,
                        alias: 'd'
                    }
                })
                .help().argv;


module.exports = {
    argv
}