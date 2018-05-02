// root element
const renderElem = document.getElementById('app');

// The content to render to the DOM
const renderContent = url => {
  return App(url).then(val => {
    const prev = renderElem.childNodes[0] || null;
    if (prev) {
      return renderElem.replaceChild(val, prev);
    }
    renderElem.appendChild(val);
  });
};

// initial load from utils
renderContent();

// watch for url change
window.onhashchange = () => renderContent();
