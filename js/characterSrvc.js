class CharSrvc {
  getCharacters() {
    return new Promise(function(resolve, reject) {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          resolve(this.responseText);
        }
      };
      xhttp.open('GET', 'https://www.swapi.co/api/people', true);
      xhttp.send();
    });
  }
}
