//Aqui vamos a importar los templates y las paginas que creamos y aqui manejaremos las rutas y el render de la app

import Header from "../template/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

const router = async () => {
  //DEfinimos los elemento donde vamos a poder hacer render
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  //De esta manera empujamos el header a nuestra aplicación
  header.innerHTML = await Header();

  let hash = getHash();
  let route = await resolveRoutes(hash); //llamamos a la funcion que creamos hace un momoento en la anterior clase
  let render = routes[route] ? routes[route] : Error404; //vemos si exite la ruta que obtuvimos
  content.innerHTML = await render();
};

//Debemos recordar siempre exportar nuestro elemento
export default router;
