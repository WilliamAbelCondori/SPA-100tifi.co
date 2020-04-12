const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split("/")[1] || '/';
    //Ejemplo de hash = #/1/ entonces la line de arriba hace que obtengamos solo el 1
export default getHash;
