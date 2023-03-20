const sound1 = new Audio("./429736__mateopkp8__28-desliza-papel.wav");

const img1 = document
  .querySelector(".img-perfil")
  .addEventListener("mouseover", () => {
    sound1.play();
  });

const sound2 = new Audio("./85599__jankoehl__splash01.wav");

const img2 = document
  .querySelector('#icon-1')
  .addEventListener('mouseover', () => {
    sound2.play();
  });

  const sound3 = new Audio("./85599__jankoehl__splash01.wav");

const img3 = document
  .querySelector('#icon-2')
  .addEventListener("mouseover", () => {
    sound3.play();
  });

  const sound4 = new Audio("./85599__jankoehl__splash01.wav");

const img4 = document.querySelector('#icon-3').addEventListener("mouseover", () => {
    sound4.play();
});