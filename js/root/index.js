const render = document.getElementById('app');

App().then(val => {
  render.innerHTML = val;
});
