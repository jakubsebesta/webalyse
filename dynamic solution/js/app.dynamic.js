/**
 *
 *
 * Create html elements
 *
 *
 */

const body = document.querySelector("body");
const headlineText = "What we do";

createHeadline(headlineText);
createCardsSection(textCards);

/**
 *
 *
 * Functions
 *
 *
 */

//Create section with cards

function createCardsSection(data) {
  //Create container
  const newContainer = document.createElement("div");
  newContainer.className = "container";

  body.append(newContainer);

  //Create cards

  data.forEach((card) => {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.innerHTML = `<div class="card__header">
            <h2 class="card__header__headline">
                ${card.cardHeadline}
            </h2>
            <div class="card__header__underline"><hr></div>
        </div>
        <p class="card__paragraph">
            ${card.cardParagraph}
        </p>
        <a href="#" class="card__anchor">${card.cardLink}</a>`;

    newContainer.append(newCard);
  });
}

//Create h1 element

function createHeadline(headlineText) {
  const h1 = document.createElement("h1");
  h1.className = "headline";
  h1.textContent = headlineText;

  body.prepend(h1);
}

/**
 *
 *
 * Styles
 *
 *
 */

const headline = document.querySelector(".headline");
const container = document.querySelector(".container");
const card = Array.from(document.querySelectorAll(".card"));
const cardHeader = Array.from(document.querySelectorAll(".card__header"));
const cardHeaderHeadline = Array.from(
  document.querySelectorAll(".card__header__headline")
);
const cardHeaderUnderline = Array.from(
  document.querySelectorAll(".card__header__underline")
);
const cardParagraph = Array.from(document.querySelectorAll(".card__paragraph"));
const cardAnchor = Array.from(document.querySelectorAll(".card__anchor"));

//Set styles

body.style.cssText = "font-size:100%;max-width:1500px;text-align:center;margin:3rem auto";

headline.style.cssText =
  "text-align:center;font-size:3.43rem;color:#0B4056;margin-bottom:7rem;line-height:1.2;font-weight:600;letter-spacing:.68px;font-family:'Poppins',sans-serif";

container.style.cssText =
  "display:-webkit-box;display:-ms-flexbox;display:flex;width:95%;margin:0 auto";

card.forEach((element) => {
  element.style.cssText =
    "padding:2rem;color:#0B4056;-webkit-transition:.3s;-o-transition:.3s;transition:.3s;width:33%;border-right:1px solid #0B4056";
});

cardHeader.forEach((element) => {
  element.style.cssText =
    "color:white;padding:.5rem;padding-bottom:0;background-color:#0B4056;border-radius:.7rem;display:inline-block;margin-bottom:4rem";
});

cardHeaderHeadline.forEach((element) => {
  element.style.cssText =
    "color:white;padding:.5rem;padding-bottom:0;background-color:#0B4056;border-radius:.7rem;display:inline-block;margin-bottom:.2rem;margin-top:.1rem;font-family:'Poppins', sans-serif";
});

cardHeaderUnderline.forEach((element) => {
  element.style.cssText =
    "margin:0 auto;-webkit-transition:.3s;-o-transition:.3s;transition:.3s; width:25px";
});

cardParagraph.forEach((element) => {
  element.style.cssText =
    "color:inherit;font-size:1.1rem;font-family:'Roboto',sans-serif; line-height: 1.8";
});

cardAnchor.forEach((element) => {
  element.style.cssText =
    "color:inherit;font-size:1rem;font-weight:bold;font-family:'Roboto',sans-serif;";
});

//remove border from last card
card[card.length - 1].style.border = "none";

/**
 *
 *
 * Hover effect
 *
 *
 */

const hoverOn =
  "padding:2rem;color:#0B4056;-webkit-transition:.3s;-o-transition:.3s;transition:.3s;width:33%;cursor:pointer; background:#0B4056;color:white; border-right:1px solid #0B4056";

const hoverOff =
  "padding:2rem;color:#0B4056;-webkit-transition:.3s;-o-transition:.3s;transition:.3s;width:33%;border-right:1px solid #0B4056";

//Add event listeners

card.forEach((element) => {
  element.addEventListener("mouseenter", (event) => {
    event.target.style.cssText = hoverOn;

    const thisUnderline = event.target.querySelector(
      ".card__header__underline"
    );

    thisUnderline.style.width = "100%";
  });

  element.addEventListener("mouseleave", (event) => {
    event.target.style.cssText = hoverOff;

    const thisUnderline = event.target.querySelector(
      ".card__header__underline"
    );

    thisUnderline.style.width = "25px";

    card[card.length - 1].style.border = "none";
  });
});
