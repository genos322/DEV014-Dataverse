import { renderItems } from "./view.js";
import { filterByRace } from './dataFunctions.js';
import { filterByAge } from './dataFunctions.js';

import data from "./data/dataset.js";

document.addEventListener("DOMContentLoaded", () => {
  let dataGlobal = data;
  let cont = 0;
  const characterContainer = document.querySelector(".main");

  characterContainer.appendChild(renderItems(dataGlobal));

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

  document.querySelector('#filterRace').addEventListener('change', (event) => {
    cont++;
    const selection = event.target.value;
    const filteredData = filterByRace(selection, dataGlobal);//swtich dataGlobal
    console.log(filteredData,dataGlobal.length);
    characterContainer.innerHTML = '';
    if(filteredData.length===0)
    {
      characterContainer.innerHTML = '<h2>No se encontraron personajes</h2>';
    }
    if(filteredData.length !== 0 || cont < 2){
      cont += 0;
      dataGlobal = filteredData;
      characterContainer.appendChild(renderItems(filteredData));
    }
  });

  document.querySelector('#filterByAge').addEventListener('change', (event) => {
    cont++;
    const selection = event.target.value;
    const filteredData = filterByAge(selection, dataGlobal);//switch dataGlobal
    console.log(filteredData, dataGlobal.length);
    characterContainer.innerHTML = '';
    if(filteredData.length===0){
      characterContainer.innerHTML = '<h2>No se encontraron personajes</h2>';
    }
    if(filteredData.length !== 0 || cont < 2){
      dataGlobal = filteredData;
      cont += 0;
      characterContainer.appendChild(renderItems(filteredData));
    }
  });

  document.querySelector('#limpiar').addEventListener('click', () => {
    document.querySelector('#filterRace').value = 'default';
    document.querySelector('#filterRace').options.item(0).selected = true;
    document.querySelector('#filterByAge').value = 'default';
    document.querySelector('#filterByAge').options.item(0).selected = true;
    characterContainer.innerHTML = '';
    characterContainer.appendChild(renderItems(data));
    dataGlobal = data;
    console.log(data);
  });

});

console.log(filterByRace(document.querySelector('.filterRace').value,data), renderItems(data), data.facts);

renderItems(data);
