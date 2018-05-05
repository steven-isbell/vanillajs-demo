// App is deciding what content to render
const App = async (url, id) => {
  const hasParam = location.hash.split('/')[1];
  switch (location.hash) {
    case `#character/${hasParam}`:
      const char = cache.people.results.find(val =>
        val.name.toLowerCase().includes(hasParam.toLowerCase())
      );
      return CharContainer(char);
    case '#characters':
      const chars = await getChars(url);
      return CharContainer(chars);
    default:
      const elem = document.createElement('div');
      elem.innerHTML = '<div>HOME PAGE</div>';
      return elem;
  }
};
