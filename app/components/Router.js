import { ButtonSection } from "./ButtonSection.js";
import { ContentGrid } from "./ContentGrid.js";
import { CHANNELS } from "../helpers/db.js";
import { Carousel } from "./Carousel.js";
import { Reproductor } from "./Reproductor.js";
import { loopChannel } from "../helpers/loopChannel.js";
import { Favorites } from "./Favorites.js";

export function Router() {
  let hash = location.hash;
  const $main = document.getElementById("main");
  let idChannel = hash.split("#/search=")[1];
  const $navigator = document.getElementById("navigator");
  const { music, general, sports, entertainment } = CHANNELS.category;
  let desc = "";
  
  //console.log(idChannel);
  
  if(hash == "#/" || !hash) {
    $navigator.appendChild(Carousel());
    
    $main.appendChild(ButtonSection());

    //SPREAD OPERATOR, UNIR MAS DE UN ELEMENTO EN EL CONTENEDOR
    $main.appendChild(ContentGrid(loopChannel(music), loopChannel(sports), loopChannel(general), loopChannel(entertainment)));
  }

  if(hash.includes("#/search=")) {
    //BUSCAR CANAL POR ID CATEGORIA MUSICA
    music.forEach(channel => {
      if(channel.tvgId === idChannel) {
        desc = "La música es una aventura sonora donde el jazz acaricia, el heavy metal retumba, el reggae mece, la electrónica pulsa, la clásica encanta, el hip-hop narra y el flamenco arde. Es un pasaporte a la serenidad o un boletín de fiesta, todo en un compás. ¡Sintoniza y disfruta del viaje! 🎶✨";

        $main.appendChild(Reproductor(channel, "Musical", desc));
        //console.log("soy musica");
      }
    });

    //BUSCAR CANAL POR ID CATEGORIA GENERAL
    general.forEach(channel => {
      if(channel.tvgId === idChannel) {
        desc = "El Canal Todo-en-Uno: Donde las noticias se encuentran con la diversión. Tu dosis diaria de actualidad y risas, todo en un solo lugar. ¡Sintoniza y vive la experiencia! 📡🎭";

        $main.appendChild(Reproductor(channel, "General", desc));
      }
    });
  
    //BUSCAR CANAL POR ID CATEGORIA DEPORTES
    sports.forEach(channel => {
      if(channel.tvgId === idChannel) {
        desc = `🌟 ¡Bienvenidos al emocionante mundo del streaming deportivo! 🌟
        \n¿Estás listo para vivir la acción como si estuvieras en primera fila? ¡Prepárate para sentir la adrenalina desde la comodidad de tu pantalla! En nuestro sitio, cada juego es una historia épica, cada partido es una batalla legendaria, y tú tienes un asiento VIP para verlo todo desplegarse.`;

        $main.appendChild(Reproductor(channel, "Deportiva", desc));
      }
    });
  
    //BUSCAR CANAL POR ID CATEGORIA ENTRETENIMIENTO
    entertainment.forEach(channel => {
      if(channel.tvgId === idChannel) {
        desc = `¿Listo para la diversión que nunca termina? tu destino definitivo para todo lo que es entretenimiento. Desde las series que te mantienen al borde del asiento hasta las comedias que te hacen llorar de risa, tenemos un cóctel de contenido que te mantendrá pegado a la pantalla. 📺💥
        \n
        Sumérgete en maratones de tus programas favoritos, descubre joyas ocultas del cine independiente. 🌟🎬
        \n
        Así que si buscas escapar de la rutina diaria y sumergirte en mundos de fantasía, drama y emoción, Canal Fiesta es tu boleto a la aventura. ¡Prepara tus snacks, elige tu lugar favorito y déjate llevar por la magia del entretenimiento! 🍿✨`;
  
        $main.appendChild(Reproductor(channel, "De Entretenimiento", desc));
      }
    });
  }

  //POR CATEGORIAS
  if(hash == "#/entertainment") {
    $main.appendChild(ButtonSection());

    //RECORRIDO FOR EACH DEL ARRAY ENTERTAINMENT DE LA DB
    $main.appendChild(ContentGrid(loopChannel(entertainment)));
  }

  if(hash == "#/music") {
    $main.appendChild(ButtonSection());

    //RECORRIDO FOR EACH DEL ARRAY MUSIC DE LA DB
    $main.appendChild(ContentGrid(loopChannel(music)));
  }

  if(hash == "#/general") {
    $main.appendChild(ButtonSection());

    //RECORRIDO FOR EACH DEL ARRAY GENERAL DE LA DB
    $main.appendChild(ContentGrid(loopChannel(general)));
  }

  if(hash == "#/sports") {
    $main.appendChild(ButtonSection());

    //RECORRIDO FOR EACH DEL ARRAY SPORTS DE LA DB
    $main.appendChild(ContentGrid(loopChannel(sports)));
  }

  if(hash == "#/my-fav") {
    const arrayFav = localStorage.getItem("fav").split(",");
    const arrayChannels = [...music, ...general, ...sports, ...entertainment];
    const arrayChannelFav = [];
    
    arrayChannels.forEach(channel => {
      arrayFav.forEach( id => {
        if(channel.tvgId === id) {
          arrayChannelFav.push(channel);
        }
      });
    });

    $main.appendChild(Favorites(arrayChannelFav));
  }
}
