var socket = io(); // no todos los navegadores conocen el let

        // On : es para escuchar informacion
        socket.on('connect', function() {
            console.log('Conectado al servidor.....web');
        });

        socket.on('disconnect', function() {
            console.log('perdimos la connexion.....web');
        });

        // emit : es para Enviar Informacion
        socket.emit('enviarMensaje',{
            usuario: 'Claudio',  // comentar para que todo salga mal
            mensaje: 'Hola Mundo con emit'
        }, function(resp){  // tercer argumento para verificar que si se envio el mensaje
            console.log('Se disparo el callback');
            console.log(resp);
        });

        // Paso 2 Escuchar info en el cliente
        socket.on('enviarMensaje', (mensaje) => {
            console.log('Servidor:', mensaje);
        })
