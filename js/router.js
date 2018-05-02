class Router {
  constructor(routes) {
    this.routes = routes;
    this.root = document.getElementById('app');
    this.hasChanged = this.hasChanged.bind(this);

    this.init();
  }
  init() {
    const r = this.routes;
    window.addEventListener('hashchange', e => {
      this.hasChanged(r);
    });
    this.hasChanged(r);
  }
  hasChanged(r) {
    console.log(this);
    if (window.location.hash.length > 0) {
      for (let i = 0, length = r.length; i < length; i++) {
        let route = r[i];
        if (route.isActiveRoute(window.location.hash.substr(1))) {
          this.goToRoute(route.htmlName);
        }
      }
    } else {
      for (let i = 0, length = r.length; i < length; i++) {
        let route = r[i];
        if (route.default) {
          this.goToRoute(route.htmlName);
        }
      }
    }
  }
  goToRoute(htmlName) {
    const url = 'views/' + htmlName;
    const xhttp = new XMLHttpRequest();
    const that = this;
    xhttp.onreadystatechange = function() {
      if (this.readyState === 3) that.root.innerHTML = 'Loading...';
      else if (this.readyState === 4 && this.status === 200) {
        that.root.innerHTML = this.responseText;
      }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
  }
}
