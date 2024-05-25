import { App } from './App.js';

//VARIABLE GLOBAL
let id;

document.addEventListener("DOMContentLoaded", () => {
  App();
  
  if(!(localStorage.getItem("fav"))) localStorage.setItem("fav", "");

  ScrollReveal().reveal('#root', { delay: 200 });
});

window.addEventListener("hashchange", () => {
  App();

  if(location.hash.includes("#/search=")) {
    location.reload();
  }
});

document.addEventListener("click", e => {
  if(e.target.matches(".btn-delete")) {
    let arrayFav = localStorage.getItem("fav").split(",");
    id = e.target.id;
    
    arrayFav = arrayFav.filter(item => {
      return item !== id;
    });

    localStorage.setItem("fav", arrayFav);
    location.reload();
  }


  if(e.target.matches(".btnLoveClick")) {
    const $alert = document.querySelector(".alert");
    id = e.target.id;
    //console.log(id);

    if(!(localStorage.getItem("fav").split(",")).includes(id)) {
      localStorage.setItem("fav", 
        localStorage.getItem("fav") + id + ","
      );

      $alert.classList.toggle("hidden");
      $alert.textContent = "El Canal se ha agregado a tu lista de favoritos.";
    }else {
      $alert.classList.toggle("hidden");
      $alert.textContent = "El Canal ya ha sido agregado a tu lista de favoritos.";
    }

    $alert.innerHTML += `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
  }
});