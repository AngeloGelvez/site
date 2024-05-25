export function Carousel() {
  const $div = document.createElement("div");

  //VIDEO MUSICA
  //h<video src="https://videos.pexels.com/video-files/1692701/1692701-hd_1920_1080_30fps.mp4" preload autoplay loop style=" width: 100%; height: auto;">
  //<img src="./app/assets/entretainment.jpg" class="d-block w-100" alt="...">
  //<img src="./app/assets/music.jpg" class="d-block w-100" alt="...">
  //<img src="./app/assets/cinema.jpg" class="d-block w-100" alt="...">

  $div.innerHTML = `
    <div class="d-flex visible  w-900-center">
      <div class="container rowdies-regular w-100 m-auto ms-5">
        <h1>¡Sumérgete en un oasis de sonidos serenos!</h1>
        <p class="rowdies-light" >En nuestro sitio web de streaming, te ofrecemos una amplia selección de música diseñada para relajarte y elevar tu estado de ánimo. Desde melodías suaves hasta ritmos ambientales, tenemos todo lo que necesitas para crear el ambiente perfecto para desconectar y descansar.</p>
      </div>
      <div class="w-100 w-900">
        <img src="./app/assets/music.jpg" class="d-block w-100" alt="microfono es un escenario artistico">
      </div>
    </div>

    <div class="d-flex invisible  w-900-center">
      <div class="container rowdies-regular w-100 m-auto ms-5">
        <h1>¡La diversión nunca se detiene en nuestro sitio de streaming!</h1>
        <p class="rowdies-light" >Descubre una experiencia de entretenimiento sin límites con nuestra amplia variedad de contenido emocionante.</p>
      </div>
      <div class="w-100 w-900">
        <img src="./app/assets/entretainment.jpg" class="d-block w-100" alt="personas emocionadas en un concierto">
      </div>
    </div>

    <div class="d-flex invisible  w-900-center">
      <div class="container rowdies-regular w-100 m-auto ms-5">
        <h1>¡Bienvenido a tu destino cinematográfico definitivo!</h1>
        <p class="rowdies-light" >Te llevamos a un viaje a través del maravilloso mundo del cine. Con una biblioteca repleta de películas de todos los géneros, estamos aquí para satisfacer todos tus deseos cinematográficos. </p>
      </div>
      <div class="w-100 w-900">
        <img src="./app/assets/cinema.jpg" class="d-block w-100" alt="entrada de un cine">
      </div>
    </div>

    <div class="d-flex invisible  w-900-center">
      <div class="container rowdies-regular w-100 m-auto ms-5">
        <h1>Tunea tu relajación 🎶</h1>
        <p class="rowdies-light" >Descubre nuestro streaming de música para momentos de paz y tranquilidad.</p>
      </div>
      <div class="w-100 w-900">
      <img src="./app/assets/tuneado.jpg" class="d-block w-100" alt="elementos para la creacion de musica"> 
      </div>
    </div>
  `;

  let elements = Array.from($div.children);
  let currentIndex = 0;

  setInterval(() => {
    const currentElement = elements[currentIndex];
    const nextIndex = (currentIndex + 1) % elements.length;
    const nextElement = elements[nextIndex];

    currentElement.classList.toggle("invisible");
    currentElement.classList.toggle("visible");

    nextElement.classList.toggle("invisible");
    nextElement.classList.toggle("visible");

    currentIndex = nextIndex;
  }, 10000);

  return $div;
}
