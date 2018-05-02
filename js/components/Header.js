const Header = () => {
  return `
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#characters">Characters</a>
        </li>
      </ul>
`;
};

const elem = document.createElement('header');
elem.style.marginBottom = '15px';
elem.innerHTML = Header();

document.querySelector('body').insertAdjacentElement('afterbegin', elem);
