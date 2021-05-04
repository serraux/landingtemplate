/* 1. Se obtiene el archivo JSON con la API XMLHttpRequest */
const requestURL =
  "https://raw.githubusercontent.com/serraux/Javascript/main/index.json";

/* 2. Crear una nueva instancia de objeto de solicitud desde el constructor XMLHttpRequest */
const request = new XMLHttpRequest();

/* 3. Abrir una nueva solicitud utilizando el método open(). */
request.open("GET", requestURL);

/* 4. Establecer el responseType a JSON, de esta forma ese XHR sabe que el servidor estará retornando JSON 
y que esto debería ser convertido en segundo plano en un objeto JavaScript. Luego se envía la solicitud 
con el método send(): */
request.responseType = "json";
request.send();

/* 5. Esperar por la respuesta a retornar desde el servidor y luego, manejarla.  */
request.onload = function () {
  const superHeroes = request.response;

  renderHeader(superHeroes);
  showHeroes(superHeroes);
};
