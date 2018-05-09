// App is deciding what content to render
const App = async (url, id) => {
  const hashParts = location.hash.split('/');
  const hasParam = hashParts[hashParts.length - 1];
  switch (location.hash) {
    case `#/character/${hasParam}`:
      const people = JSON.parse(localStorage.getItem('people'));
      if (!people) {
        location.hash = '#/characters';
        break;
      }
      const char = people.results.find(val =>
        val.name.toLowerCase().includes(hasParam.toLowerCase())
      );
      return CharContainer(char);
    case '#/characters':
      const chars = await getChars(url);
      return CharContainer(chars);
    case '':
    case '/':
    case '#/home':
      const elem = document.createElement('div');
      elem.innerHTML = '<h1>HOME PAGE</h1>';
      return elem;
    default: {
      const elem = document.createElement('div');
      elem.innerHTML = '<p>FourOhFour</p>';
      return elem;
    }
  }
};
