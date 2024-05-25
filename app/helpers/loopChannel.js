import { Card } from "../components/Card.js";

export function loopChannel(props) {
  const $fragment = document.createDocumentFragment();

  props.forEach((channel) => {
    let $card = Card(channel);
    
    $fragment.appendChild($card);
  });


  return $fragment;
}