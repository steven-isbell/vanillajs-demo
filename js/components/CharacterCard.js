const CharCard = char => {
  const elem = document.createElement('div');
  elem.setAttribute(
    'style',
    `display: flex;
    flex-direction: column;
    width: 300px;
    height: 350px;
    align-items: center;
    justify-content:center;`
  );
  elem.innerHTML = `<h1 style="margin-bottom:10px">${char.name}</h1>
                    <p>${char.birth_year}</p>`;
  return elem;
};
