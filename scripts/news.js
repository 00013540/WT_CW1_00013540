import newsData from "../db/newsData.js";
const newsAll = document.getElementById("news-all");

// This function is used to draw news dynamically.
const drawNews = () => {
  const { data } = newsData;
  // For the content of news, dummy data was used from newsData.js.
  const content = data.map((item) => {
    const header = `
    <div class="news__all__header">
        <h2 class="news__all__title">${item.title}</h2>
        <p class="news__all__description">
        ${item.description}
        </p>
    </div>
    `;

    const newsBox = item.data.map(
      (innerItem) => `
    <div class="news__box">
        <div class="news__top">
        <img
            class="news__img"
            src="${innerItem.img}"
            alt="image"
        />
        </div>
        <p class="news__description">${innerItem.description}</p>
    </div>
    `
    );

    return `
    <div class="news__row">
      ${header}
      <div class="news__container">
        ${newsBox.join("")}
      </div>
    </div>
    `;
  });

  newsAll.innerHTML = content.join("");
};

drawNews();
