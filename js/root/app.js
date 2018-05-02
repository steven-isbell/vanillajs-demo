// App is deciding what content to render
const App = async url => {
  switch (location.hash) {
    case '#characters':
      const chars = await getChars(url);
      return CharContainer(chars);
    default:
      const elem = document.createElement('div');
      elem.innerHTML = '<div>HOME PAGE</div>';
      return elem;
  }
};
