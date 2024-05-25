export function ContentGrid(...props) {
  const $div = document.createElement("div");

  $div.classList.add("row", "mt-5");

  //data-masonry='{"percentPosition": true }'
  //$div.dataset.masonry = '{"percentPosition": true }';

  props.forEach( element => {
    $div.appendChild(element);
  });

  return $div;
}