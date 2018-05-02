class Button {
  constructor(text, url) {
    this.text = text;
    this.url = url;
  }
  render() {
    console.log(this.url);
    const elem = document.createElement('button');
    elem.innerText = this.text;
    elem.setAttribute(
      'style',
      `padding: 20px;
      border-radius: 3px;
      background: ${this.text === 'next' ? '#3082F7' : '#DC3732'};
      font-size: 16px;
      margin: 5px;
      color: #fff;`
    );
    elem.addEventListener('click', async () => {
      return renderContent(this.url);
    });
    return elem;
  }
}
