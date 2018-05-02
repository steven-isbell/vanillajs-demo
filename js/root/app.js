const BASE_PATH = '127.0.0.1:8080/';

const App = async () => {
  renderElem.innterHTML = '<div>Loading....</div>';
  switch (location.hash) {
    case '#characters':
      const chars = await getChars();
      return `${CharContainer(chars)}`;
    default:
      return `<div>HOME PAGE</div>`;
  }
};
