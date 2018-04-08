// importamos el modulo io
const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensajeCliente', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido al grupo'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });
    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensajeCliente', data)
            /*
            if (mensaje.usuario) {
                callback({
                    resp: 'Todo salio Bien!!!'
                });
            } else {
                callback({
                    resp: 'TODO SALIO MAL!!!'
                });
            }
            */
    });
});