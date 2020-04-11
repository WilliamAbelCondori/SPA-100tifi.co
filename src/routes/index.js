//Aqui vamos a importar los templates y las paginas que creamos y aqui manejaremos las rutas y el render de la app

import Header from "../template/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";

const routes = {
    '/':Home,
    '/:id':Character,
    '/contact':'Contact',
}

const router=async ()=>{
    //DEfinimos los elemento donde vamos a poder hacer render
    const header=null || document.getElementById('header');
    const content=null || document.getElementById('content');

    //De esta manera empujamos el header a nuestra aplicación
    header.innerHTML = await Header();
}

//Debemos recordar siempre exportar nuestro elemento
export default router;