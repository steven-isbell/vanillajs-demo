// Card component for rendering character info
const CharCard = char => {
  const elem = document.createElement('div');
  elem.setAttribute(
    'style',
    `display: flex;
    flex-direction: column;
    width: 300px;
    height: 350px;
    align-items: center;
    justify-content:center;
    box-shadow: 2px 2px 12px 2px rgb(0, 0, 0, .25);
    margin: 10px`
  );
  elem.innerHTML = `<h1 style="margin-bottom:10px">${char.name}</h1>
                    <p>${char.birth_year}</p>`;

  elem.addEventListener('mouseenter', () => {
    elem.style.transform = 'scale(1.1)';
  });
  elem.addEventListener('mouseleave', () => {
    elem.style.transform = 'scale(1)';
  });
  elem.addEventListener('click', () => {
    location.hash = `#character/${char.name.split(' ')[0]}`;
  });

  return elem;
};
