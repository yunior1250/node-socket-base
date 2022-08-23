
//refferencias del HTML
const lbOnline = document.querySelector('#lbOnline');
const lbOffline = document.querySelector('#lnOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');


const socket = io();

socket.on('connect', () => {
    //console.log('conectado');
    lbOffline.style.display = 'none';
    lbOnline.style.display = '';
})

socket.on('disconnect', () => {
    //console.log('desconectado del servidor');
    lbOnline.style.display = 'none';
    lbOffline.style.display = '';
})

socket.on('enviar-mensaje', (payload) => {
    console.log(payload)
})

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123456',
        fecha: new Date().getTime()
    }
    // console.log(mensaje);
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('desde el server', id);

    });
})