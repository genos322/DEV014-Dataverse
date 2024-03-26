import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

document.addEventListener("DOMContentLoaded", () => {
  const characterContainer = document.querySelector(".cards");
  data.map((item) => {
    const card = document.createElement("li");
    card.idNa;
    card.className = "card";
    card.setAttribute("id", item.id);
    card.setAttribute("name", item.name);
    card.setAttribute("itemtype","");
    card.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}" />
            <h2>${item.name}</h2>
            <p>${item.shortDescription}</p>
            <button class="showDescription">Ver más</button>
            <p class="largeDescription">${item.description}</p>
            <button class="unShowDescription">Volver</button>`;
    characterContainer.appendChild(card);
  });
  document.querySelectorAll(".showDescription").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.parentElement;
      card.querySelector("img").style.display = "none";
      card.querySelector("h2").style.display = "none";
      card.querySelector("p").style.display = "none";
      card.querySelector(".largeDescription").style.display = "block";
      button.style.display = "none";
      card.querySelector(".unShowDescription").style.display = "block";
    });
  });
  document.querySelectorAll(".unShowDescription").forEach((button) => {
    button.addEventListener("click", () => {
      const card1 = button.parentElement;
      card1.querySelector("img").style.display = "block";
      card1.querySelector("h2").style.display = "block";
      card1.querySelector("p").style.display = "block";
      card1.querySelector(".largeDescription").style.display = "none";
      button.style.display = "none";
      card1.querySelector(".showDescription").style.display = "block";
    });
  });

  // document.querySelector(".showDescription").addEventListener("click",()=>{
  //     document.querySelector(".card img").style.visibility = 'hidden';
  //     document.querySelector(".card h2").style.visibility = 'hidden';
  //     document.querySelector(".card p").style.visibility = 'hidden';
  // })
});

console.log(example, renderItems(data), data);

renderItems(data);
