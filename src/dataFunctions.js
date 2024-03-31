export const filterByRace = (selection,data) => {
  let filterResult = [];
  filterResult = data.filter((element) => {
    return element.facts['race'] === selection // or element.facts.race
  });
  return filterResult;
};

export const filterByAge = (selection,data) => {
  let selectionType = selection.split(' ');

  if (selection === '100') {
    return data.filter((element) => {
      return element.facts.age <= selection;
    });
  }
  if ( selection === '1000') {
    return data.filter((element) => {
      return element.facts.age >= selection && element.facts.age <= 5000;
    });
  }
  if (selectionType.length === 2) {
    return data.filter((element) => {
      return element.facts.age >= selectionType[0] && element.facts.age <= selectionType[1];
    });
  }
  if (selection === 'Desconocida') {
    return data.filter((element) => {
      return element.facts.age === selection;
    });
  }
};
