const update = () => {
  return App().then(val => (renderElem.innerHTML = val));
};

window.onhashchange = () => update();
