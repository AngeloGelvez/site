export function Card(props) {
  let { tvgId, tvgLogo, groupTitle } = props;

  const $div = document.createElement("div");

  //col-sm-6 col-lg-4 mb-4"
  $div.classList.add("col");

  $div.innerHTML = `
    <a href="#/search=${tvgId}" style="text-decoration: none; color: #212529;">
      <div class="card m-auto">
        <div class="img">
          <img src="${tvgLogo}" alt="..." srcset="mdn-logo-HD.png 2x" />
        </div>

        <h3 class="card__title">${groupTitle}</h3>
        <div class="card__date">Streaming / Live</div>
        <a href="#/search=${tvgId}" class="card__arrow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
            <path fill="#fff"
              d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z">
            </path>
          </svg>
        </a>
      </div>
    </a>
  `;

  return $div;
}
