// standard function returning HTML element
const Header = () => {
  const elem = document.createElement('header');
  elem.style.marginBottom = '15px';
  elem.innerHTML = `
                    <ul style="display:flex;justify-content:space-between;align-items:center;padding:10px;">
                      <li>
                        <img height="50" width="50" src="http://logodust.com/img/free/logo1.png" />
                      </li>
                      <div style="display:flex;align-items:center;justify-content:space-between;width:20%;max-width:150px;">
                        <li>
                          <a href="#home">Home</a>
                        </li>
                        <li>
                          <a href="#characters">Characters</a>
                        </li>
                      </div>
                    </ul>
                  `;
  return elem;
};

document.querySelector('body').insertAdjacentElement('afterbegin', Header());
