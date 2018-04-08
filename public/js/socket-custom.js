var socket = io();
socket.on('connect', function() {
    console.log('conectado al servidor');

});

socket.on('disconnect', function() {

    console.log('Perdimos la comunicacion con el servidor');

});
// Enviar información al servidor
socket.emit('enviarMensaje', {
    usuario: 'Juan',
    mensaje: 'Hola Mundo'
}, function(response) {
    console.log('Se disparo el Callback', response);
});
//Escuchar la respuesta del servidor
socket.on('enviarMensajeCliente', function(objeto) {
    console.log('Servidor:', objeto);
});