function getChars() {
  return new Promise(function(resolve, reject) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const { results } = JSON.parse(this.responseText);
        resolve(results);
      }
    };
    xhttp.open('GET', 'https://www.swapi.co/api/people', true);
    xhttp.send();
  });
}

const CharContainer = chars => {
  return `<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:center;">
            ${chars.map(CharCard).join('')}
          </div>`;
};
