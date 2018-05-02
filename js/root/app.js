const BASE_PATH = '127.0.0.1:8080/';

const App = async () => {
  if (location.hash === '#characters') {
    const chars = await getChars();
    return `${CharContainer(chars)}`;
  } else {
    return `<div>HOME PAGE</div>`;
  }
};
