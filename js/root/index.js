// root element
const renderElem = document.getElementById('app');

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
