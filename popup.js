chrome.tabs.getSelected(null, function(tab) {
  var deepLink = tab.url.replace(/\a[\d]+w[\d]+p[\d]+/, 'ACCOUNT_ID').substr(38)
  var link = document.getElementById('link');
  link.addEventListener('click', function() {
    this.select();
  })
  var title = document.getElementById('title');
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    title.value = tabs[0].title.substr(0, tabs[0].title.length - 19);
    updateLink(link, deepLink, title.value);
  });
  title.addEventListener('input', function() {
    updateLink(link, deepLink, title.value);
  });
  document.getElementById('shortlink').addEventListener('click', function() {
    if(this.checked) {
      updateLink(link, deepLink, title.value, true);
    }
    else {
      updateLink(link, deepLink, title.value, false);
    }

  });
  function updateLink(link, deepLink, title, shortlink) {
    shortlink = shortlink || false;
    var fullUrl = 'localhost:8080/deeplinker/?ga=' + deepLink +
    '&title=' + title;
    if(shortlink) {
      link.innerHTML = shortenLink(fullUrl);
    }
    else {
      link.innerHTML = fullUrl;
    }
  }
  function shortenLink(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            alert(xhr.responseText);
        }
    }
    xhr.open('post', 'https://www.googleapis.com/urlshortener/v1/url?' + 
      'key=' + API_KEY + '&longUrl=' + url);
    xhr.send()
  }
});

