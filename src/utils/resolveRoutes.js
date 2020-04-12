const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id";
    return validRoute;
  }
  return `/${route}`;  //Esto es en caso de que se 'about'
};

export default resolveRoutes;
