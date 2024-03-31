export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
    const characterContainer = document.createElement("ul");
    characterContainer.className = "cards";
  data.forEach(element => {
    const liItem = document.createElement('li');
    const liTitle = document.createElement('h2');
    const liImage = document.createElement('img');
    const liShortDescription = document.createElement('p');
    const liButtonShow = document.createElement('button');
    const liLargeDescription = document.createElement('p');
    const liButtonHide = document.createElement('button');
    
    liItem.className = 'card';
    liItem.id = element.id;
    liItem.setAttribute('itemType', 'Actors');

    liTitle.textContent = element.name;
    liImage.src = element.imageUrl;
    liImage.alt = element.name;

    liShortDescription.textContent = element.shortDescription;

    liButtonShow.textContent = 'Ver más';
    liButtonShow.className = 'showDescription';

    liLargeDescription.textContent = element.description;
    liLargeDescription.style.display = 'none';
    liLargeDescription.className = 'largeDescription';

    liButtonHide.textContent = 'Volver';
    liButtonHide.style.display = 'none';
    liButtonHide.className = 'unShowDescription';

    liItem.appendChild(liTitle);
    liItem.appendChild(liImage);
    liItem.appendChild(liShortDescription);
    liItem.appendChild(liButtonShow);
    liItem.appendChild(liLargeDescription);
    liItem.appendChild(liButtonHide);

    characterContainer.appendChild(liItem);

  });
  return characterContainer;
};

