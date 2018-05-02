class Route {
  constructor(name, htmlName, defaultRoute, id) {
    this.name = name;
    this.htmlName = htmlName;
    this.default = defaultRoute;
  }
  isActiveRoute(path) {
    return path.replace('#', '') === this.name;
  }
}
