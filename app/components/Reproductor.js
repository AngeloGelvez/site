export function Reproductor(props, title, desc) {
  let { tvgId, groupTitle, url } = props;
  const $div = document.createElement("div");
  let isWindowOpened = false;

  $div.classList.add("container", "m-auto");

  if(url.includes(".m3u8")) {
    $div.innerHTML = `
      <div class="alert alert alert-success alert-dismissible fade show text-dark hidden" role="alert"></div>

      <h2>Categoria ${title}</h2>

      <div class="container">
        <div class="d-flex justify-content-around">
          <video
          id="my-video"
          class="video-js vjs-theme-forest"
          controls
          preload="auto"
          width="850"
          height="auto"
          data-setup="{}"
          >
            <source src="${url}" type="application/x-mpegURL" />
          </video>

          <div class="list-group ul-options" style="margin: 0px 10px !Important;">
              <a href="#/sports" class="list-group-item list-group-item-action text-light" aria-current="true" style="background-color: #F27457;">
                  <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Deportes</h5>
                      <small>Transmisión en vivo</small>
                  </div>
                  <p class="mb-1">Disfruta de eventos deportivos en tiempo real.</p>
                  <small>Desde partidos de fútbol hasta competencias de atletismo.</small>
              </a>
              <a href="#/entertainment" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Entretenimiento</h5>
                      <small class="text-body-secondary">Películas, series y más</small>
                  </div>
                  <p class="mb-1">Sumérgete en el mundo del entretenimiento.</p>
                  <small class="text-body-secondary">Desde comedias hasta dramas emocionantes.</small>
              </a>
              <a href="#/general" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">General</h5>
                      <small class="text-body-secondary">Variedad de contenido</small>
                  </div>
                  <p class="mb-1">Explora una amplia gama de opciones.</p>
                  <small class="text-body-secondary">Noticias, documentales y más.</small>
              </a>
          </div>
    
        </div>

        <hr/>
        
        <div class="d-flex justify-content-between">
          <h5>${groupTitle}</h5> 
          <button class="btn btnLoveChannel btnLoveClick" id=${tvgId}><svg class="btnLoveClick" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#BF665E" class="bi bi-heart-fill" viewBox="0 0 16 16">
          <path class="btnLoveClick" id=${tvgId} fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
          </svg></button>
        </div>
        <p class="mt-3">${desc}</p>
      </div>
    `;  
  }else {
    $div.innerHTML = `
      <div class="alert alert alert-success alert-dismissible fade show text-dark hidden" role="alert"></div>

      <h2>Categoria ${title}</h2>

      <div class="container">
        <div class="d-flex justify-content-around">
          <iframe allow="fullscreen" src="${url}" width="850" height="500" allowfullscreen></iframe>  

          <div class="list-group ul-options" style="margin: 0px 10px !Important;">
              <a href="#/entertainment" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Información</h5>
                      <small class="text-body-secondary">A tener en cuenta.</small>
                  </div>
                  <p class="mb-1">Si te encuentras con canales en ingles <br/>lo que debes hacer es tocar la Tuerca del reproductor <br/>y tocar el icono de auriculares <br/>que sale arriba y seleccionar Spanish.</p>
                  <small class="text-body-secondary">Disfrtua de este contenido.</small>
              </a>
          </div>
        </div>

        <hr/>
        
        <div class="d-flex justify-content-between">
          <h5>${groupTitle}</h5> 
          <button class="btn btnLoveChannel btnLoveClick" id=${tvgId}><svg class="btnLoveClick" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#BF665E" class="bi bi-heart-fill" viewBox="0 0 16 16">
          <path class="btnLoveClick" id=${tvgId} fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
          </svg></button>
        </div>
        <p class="mt-3">${desc}</p>
      </div>
    `;  
  }

  return $div;
}
