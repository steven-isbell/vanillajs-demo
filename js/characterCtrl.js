const CharSrvcInstance = new CharSrvc();

CharSrvcInstance.getCharacters().then(response => {
  const { results } = JSON.parse(response);
  const charContainer = document.getElementById('characters');
  const style = `display:flex;flex-direction:column;width:300px;height:350px;align-items:center;justify-content:center;`;
  let html = '';
  results.forEach(
    char =>
      (html += `<div style=${style}><h1 style="margin-bottom:10px">${
        char.name
      }</h1><p>${char.birth_year}</p></div>`)
  );
  charContainer.innerHTML = html;
});
