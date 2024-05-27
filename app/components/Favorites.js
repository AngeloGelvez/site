export function Favorites(props) {
  const $section = document.createElement("div");
  const $ul = document.createElement("ul");

  $section.classList.add("container", "mt-5");
  $section.style.marginBottom = "20rem";
  $section.innerHTML = `<h1>Mis Favoritas</h1>`;

  $ul.classList.add("list-group", "list-group-light");

  if(props.length === 0) {
    $ul.innerHTML = `
      <li class="list-group-item disabled text-center" aria-disabled="true">No tienes canales favoritos aún.</li>
    `;
  }else {
    props.forEach(channel => {
      const { tvgId, groupTitle } = channel;
      
      $ul.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <img src="./app/assets/live.png" alt="..." style="width: 45px; height: 45px"
              class="rounded-circle" />
            <div class="ms-3">
              <p class="fw-bold mb-1">${groupTitle}</p>
              <p class="text-muted mb-0">Streaming / Live</p>
            </div>
          </div>
          <div>
            <a type="button" class="btn btn-outline-success" href="#/search=${tvgId}" onclick="window.open('https://www.highcpmgate.com/d3zfh6yqwx?key=0c23279a8ecbaa739a14a2bb32ffc8ad', '_blank', 'width=1000,height=600');">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
              </svg>
            </a>
            <a type="button" class="btn btn-outline-danger btn-delete" id="${tvgId}">
              <svg id="${tvgId}" class="card-redirect btn-delete" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
              <path id="${tvgId}" class="btn-delete"  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
              </svg>
            </a>
          </div>
        </li>
      `;
    });
  }

  $section.appendChild($ul);

  return $section;
}
