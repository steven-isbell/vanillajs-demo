const renderElem = document.getElementById('app');

App().then(val => {
  renderElem.innerHTML = val;
});
