const {io} = require('../server');

io.on('connection', (client) => {
    console.log('Usuario Conectado server'); //

    // paso 2 Emitir desde el Servidor
    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado server');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => { // callback es para disparar la funcion del tercer parametro
        console.log('en el server -',data);
        // callback(); // se dispara al final para indicar al cliente que si se escribio el mensaje en el server 


        client.broadcast.emit('enviarMensaje',data);

        // if( mensaje.usuario ){
        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio Mal !!!!!'
        //     });
        // }

    })

});