export function Footer() {
  const $div = document.createElement("div");
  const $footer = document.createElement("footer");
  const $banner = document.createElement("section");

  $footer.classList.add("text-center", "text-lg-start", "text-muted", "bg-blue-dark");
  $footer.style.backgroundColor = "#151F30";

  $banner.style.marginTop = "100px";

  $banner.innerHTML = `
    <div class="static-slider10" style="background-image:url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/sliders/static-slider/slider10/img1.jpg)">
      <div class="container">
      <!-- Row  -->
        <div class="row justify-content-center ">
          <!-- Column -->
          <div class="col-md-8 align-self-center text-center">
            <span class="badge rounded-pill badge-inverse text-white font-weight-light px-3 py-1">¿Nos invitas a un café?</span>
            <h1 class="my-3 title text-white text-uppercase">Tu Apoyo Hace la Diferencia</h1>
            <h6 class="text-white font-weight-normal op-8">Si te encanta nuestro sitio web y quieres ayudarnos a seguir creciendo, considera hacer una donación. ¡Cada granito de arena cuenta!.
            Con tu contribución, no solo nos regalas un café o un taco, sino que nos das la energía para seguir adelante. ¡Gracias por ser parte de nuestra comunidad!</h6>
            <a class="btn btn-outline-light rounded-pill btn-md mt-3" href="https://www.paypal.com/paypalme/streamingtelevision" target="_blank"><span>Hacer Donación</span></a>
          </div>
          <!-- Column -->

        </div>
      </div>
    </div>
  `;

  $footer.innerHTML = `
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  </section>

  <!-- Section: Links  -->
  <section class="text-light">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>StreamingTv
          </h6>
          <p>
            Todos los streaming/enlaces de transmisión de video estan disponibles públicamente, han sido hechos públicos intencionalmente por los titulares de los derechos de autor.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Categorias
          </h6>
          <p>
            <a href="#/general" class="text-reset">General</a>
          </p>
          <p>
            <a href="#/entertainment" class="text-reset">Entretenimiento</a>
          </p>
          <p>
            <a href="#/music" class="text-reset">Música</a>
          </p>
          <p>
            <a href="#/sports" class="text-reset">Deporte</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Otros
          </h6>
          <p>
            <a href="#/" class="text-reset">Streaming</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Donaciones</a>
          </p>
          <p>
            <a href="#/my-fav" class="text-reset">Favoritos</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Contactos
          </h6>
          <p>
            <a class="text-reset">streamingTv646@gmail.com</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Facebook</a>
          </p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4 text-light" style="background-color: rgba(0, 0, 0, 0.05);">
    © ${new Date().getFullYear()} Copyright:
    <span class="text-reset fw-bold">StreamingTV</span>
  </div>
  <!-- Copyright -->
  `;

  $div.appendChild($banner);
  $div.appendChild($footer);

  return $div;
}