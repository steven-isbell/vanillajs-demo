// root element
const renderElem = document.getElementById('app');

// The content to render to the DOM
const renderContent = async url => {
  const elem = await App(url);
  const prev = renderElem.childNodes[0] || null;
  if (prev && elem) {
    return renderElem.replaceChild(elem, prev);
  } else if (elem) {
    return renderElem.appendChild(elem);
  }
};

// initial load from utils
renderContent();

// watch for url change
window.onhashchange = () => renderContent();
