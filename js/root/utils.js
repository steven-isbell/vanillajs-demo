window.addEventListener('hashchange', () => {
  App().then(val => (render.innerHTML = val));
});
