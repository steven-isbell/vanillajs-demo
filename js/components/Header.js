const Header = () => {
  const elem = document.createElement('header');
  elem.style.marginBottom = '15px';
  elem.innerHTML = `
                    <ul>
                      <li>
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#characters">Characters</a>
                      </li>
                    </ul>
                  `;
  return elem;
};

document.querySelector('body').insertAdjacentElement('afterbegin', Header());
