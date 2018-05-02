const CharSrvcInstance = new CharSrvc();
CharSrvcInstance.getCharacters().then(response => {
  const { results } = JSON.parse(response);
  const charContainer = document.getElementById('characters');
  let html = '<div class="character-card">';
  results.forEach(char => (html += `<h1>${char.name}</h1>`));
  html += '</div>';
  charContainer.innerHTML = html;
});
