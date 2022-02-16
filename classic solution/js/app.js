const card = Array.from(document.querySelectorAll(".card"));
const hr = Array.from(document.querySelectorAll(".card__header__underline"));

card.forEach((element) =>
  element.addEventListener("mouseenter", function (event) {
    let thishr = event.target.querySelector(".card__header__underline");
    this.classList.toggle("card--hover");
    this.style = "cursor:pointer";
    thishr.classList.toggle("card__header__underline--hover");
  })
);

card.forEach((element) =>
  element.addEventListener("mouseleave", function () {
    this.classList.toggle("card--hover");
    let thishr = event.target.querySelector(".card__header__underline");
    thishr.classList.toggle("card__header__underline--hover");
  })
);
