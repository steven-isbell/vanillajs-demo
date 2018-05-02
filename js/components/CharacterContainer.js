const cache = {};

const BASE_URL = 'https://www.swapi.co/api/people';

function getChars(url = BASE_URL) {
  return new Promise(function(resolve, reject) {
    if (cache.people && url === BASE_URL) {
      resolve(cache.people);
    } else {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState !== 4) {
          renderElem.innerText = 'Loading...';
        } else if (this.readyState === 4 && this.status === 200) {
          renderElem.innerText = null;
          const response = JSON.parse(this.responseText);
          cache.people = response;
          resolve(response);
        }
      };
      xhttp.open('GET', url, true);
      xhttp.send();
    }
  });
}

const CharContainer = chars => {
  const { results } = chars;
  const elem = document.createElement('div');
  const cardGrp = document.createElement('div');
  const buttonGrp = document.createElement('div');

  elem.setAttribute(
    'style',
    `display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column`
  );

  cardGrp.setAttribute(
    'style',
    `display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;`
  );

  const characters = results.map(CharCard);
  characters.forEach(val => cardGrp.appendChild(val));

  const nextBtn = new Button('next', chars.next);
  const prevBtn = new Button(
    'prev',
    !(parseInt(chars.next[chars.next.length - 1]) - 2)
      ? BASE_URL
      : chars.next.slice(0, -1) +
        `${parseInt(chars.next[chars.next.length - 1]) - 2}`
  );

  buttonGrp.appendChild(nextBtn.render());
  buttonGrp.appendChild(prevBtn.render());

  elem.appendChild(cardGrp);
  elem.appendChild(buttonGrp);

  return elem;
};
