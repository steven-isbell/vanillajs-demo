(function() {
  function init() {
    var router = new Router([
      new Route('home', 'landing.html', true),
      new Route('characters', 'characters.html')
    ]);
  }
  init();
})();
