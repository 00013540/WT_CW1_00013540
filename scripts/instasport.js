import instasportData from "../db/instasportData.js";
const instasportTop = document.getElementById("instasport-top");
const instasportBottom = document.getElementById("instasport-bottom");

// This function is used to draw youtube videos dynamically.
const drawInstasport = () => {
  const { data } = instasportData;
  // For the content of the youtube videos, dummy data was used from instasportData.js.
  const contentTop = data.actuals.map(
    (item) =>
      `
      <div class="instasport__top__box">
        <div class="instasport__top__video">
            <iframe
            class="instasport__top__iframe"
            src="https://www.youtube.com/embed/${item.link}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            >
            </iframe>
        </div>
      <p class="instasport__top__title">${item.title}</p>
      <div class="instasport__top__content">
            <span class="instasport__top__views">${item.views} views</span>
            <div class="instasport__top__likes">
            <i class="fa-solid fa-thumbs-up instasport__top__icon"></i>
            <span class="instasport__top__count">${item.likes}</span>
            </div>
      </div>
    </div>
      `
  );

  const contentBottom = data.all.map(
    (item) =>
      `
    <div class="instasport__bottom__box">
        <div class="instasport__bottom__video">
        <iframe
            class="instasport__bottom__iframe"
            src="https://www.youtube.com/embed/${item.link}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        >
        </iframe>
        </div>
        <p class="instasport__bottom__title">${item.title}</p>
        <div class="instasport__bottom__content">
        <span class="instasport__bottom__views">${item.views} views</span>
        <div class="instasport__bottom__likes">
            <i class="fa-solid fa-thumbs-up instasport__bottom__icon"></i>
            <span class="instasport__bottom__count">${item.likes}</span>
        </div>
        </div>
    </div>
    `
  );

  instasportTop.innerHTML = contentTop.join("");
  instasportBottom.innerHTML = contentBottom.join("");
};

drawInstasport();
