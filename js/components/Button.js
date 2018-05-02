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
      `height: 20px; border-radius: 3px; background: ${
        this.text === 'next' ? '#3082F7' : '#DC3732'
      };`
    );
    elem.addEventListener('click', async () => {
      return renderContent(this.url);
    });
    return elem;
  }
}
