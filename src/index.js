import router from './routes';

//Escucha los eventos de mi aplicación
window.addEventListener('load', router);

//Se va a encarg las rutas a las que me estoy moviendo
window.addEventListener('hashchange', router);