import { Main } from "./components/Main.js";
import { Footer } from "./components/Footer.js";
import { Navigator } from "./components/Navigator.js";
import { Router } from "./components/Router.js";

export function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = ``;

  $root.appendChild(Navigator());
  $root.appendChild(Main());
  $root.appendChild(Footer());

  Router();
}