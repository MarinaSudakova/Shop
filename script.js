"use strict";

const newData = JSON.parse(data);
console.log(newData);

const itemBox = document.querySelector(".con4-middle");

newData.forEach((element) => {
  itemBox.insertAdjacentHTML(
    "beforeend",
    `
    <div class="con4-middle-item">
      <img src="${element.image.source}" alt="${element.image.alt}" class="con4-middle-img">
      <div class="con4-middle-txt">
        <figcaption class="content4-title">${element.title}</figcaption>
        <p class="content4-txt">${element.text}</p>
        <p class="content4-price">${element.price.currency}${element.price.value}</p>
      </div>
    </div>
    `
  );
});
