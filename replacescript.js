function replacePage() {
  var request = new XMLHttpRequest();

  request.open('GET', 'https://hyvenet.github.io/page.html/', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var resp = request.responseText;

      document.querySelector('#html').innerHTML = resp;
    }
  };

  request.send();
}