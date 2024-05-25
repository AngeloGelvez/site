export function ButtonSection() {
  const $section = document.createElement("section");
  const $h2 = document.createElement("h1");
  
  $h2.classList.add("rowdies-regular", "cl-blue");
  $h2.textContent = "Explora distintos tipos de Streaming";

  $section.appendChild($h2);

  $section.innerHTML += `
    <div class="d-flex container-btns">
      <button class="btnSection"> 
        <a href="#/music">Música</a>
      </button>

      <button class="btnSection"> 
        <a href="#/general">General</a>
      </button>

      <button class="btnSection"> 
        <a href="#/entertainment">Entretenimiento</a>
      </button>

      <button class="btnSection"> 
        <a href="#/sports">Deportes</a>
      </button>
    </div>
  `;

  return $section;
}