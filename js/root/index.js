// root element
const renderElem = document.getElementById('app');

// The content to render to the DOM
const renderContent = url => {
  return App(url).then(val => {
    const prev = renderElem.childNodes[0] || null;
    console.log(prev, val);
    if (prev && val) {
      return renderElem.replaceChild(val, prev);
    } else if (val) {
      renderElem.appendChild(val);
    }
  });
};

// initial load from utils
renderContent();

// watch for url change
window.onhashchange = () => renderContent();
