const CharCard = char => {
  const style = `display:flex;flex-direction:column;width:300px;height:350px;align-items:center;justify-content:center;`;
  return `<div style=${style}>
              <h1 style="margin-bottom:10px">${char.name}</h1>
              <p>${char.birth_year}</p>
          </div>`;
};
