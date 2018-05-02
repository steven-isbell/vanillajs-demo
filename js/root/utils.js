const renderContent = () => {
  return App().then(val => (renderElem.innerHTML = val));
};

window.onhashchange = () => renderContent();
