


const socketcontroller = (socket) => {
    console.log('cliente conectado',socket.id);
    //console.log('Cliente conectado', socket.id);
    socket.on('disconnect', () => {
        console.log('Cliente desconectado',socket.id);
    })
    socket.on('enviar-mensaje', (payload, callback) => {
        const id = '123456789';
        // callback({ id, fecha:new Date().getTime() });
        callback(id);
        //console.log(payload);
        socket.broadcast.emit('enviar-mensaje', payload);
    })

}

module.exports = {
    socketcontroller
}