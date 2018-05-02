class Button {
  constructor(text, url) {
    this.text = text;
    this.url = url;
  }
  render() {
    console.log(this.url);
    const elem = document.createElement('button');
    elem.innerText = this.text;
    elem.addEventListener('click', async () => {
      return renderContent(this.url);
    });
    return elem;
  }
}
