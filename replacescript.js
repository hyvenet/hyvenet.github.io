fetch('/page.html')
  .then(function(response) {
    return response.text();
  })
  .then(function(body) {
    document.getElementsByTagName("html").innerHTML = body;
  });