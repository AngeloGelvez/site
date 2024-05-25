export function Navigator() {
  const $div = document.createElement("div");

  $div.id = "navigator";

  $div.innerHTML = `
    <nav class="navbar navbar-expand-lg rowdies-light">
      <div class="container-fluid container">
        <a class="navbar-brand" href="#">StreamingTV</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="collapse navbar-collapse nav justify-content-end lista" id="navbarsExample05">
          <li class="nav-item">
            <a class="nav-link active cl-blue" aria-current="page" href="#/">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link cl-blue" href="#/entertainment">Entretenimiento</a>
          </li>
          <li class="nav-item">
            <a class="nav-link cl-blue" href="#/music">Música</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btnLove" href="#/my-fav">Mis Favoritos <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
          </svg></a>
          </li>
        </ul>
      </div>
    </nav>
  `;

  /*
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Expand at lg</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample05">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  */
  
  return $div;
}