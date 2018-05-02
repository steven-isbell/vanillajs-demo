const App = async () => {
  switch (location.hash) {
    case '#characters':
      const chars = await getChars();
      return CharContainer(chars);
    default:
      const elem = document.createElement('div');
      elem.innerHTML = '<div>HOME PAGE</div>';
      return elem;
  }
};
