chrome.tabs.getSelected(null, function(tab) {
  var deepLink = tab.url.replace(/\a[\d]+w[\d]+p[\d]+/, 'ACCOUNT_ID').substr(38)
  var link = document.getElementById('link');
  link.addEventListener('click', function() {
    this.select();
  })
  link.innerHTML = 
  'localhost:8080/deeplinker/?ga=' + deepLink;
  document.getElementById('title').value = 'hi';
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting == "hello")
        sendResponse({farewell: "goodbye"});
    });
});

