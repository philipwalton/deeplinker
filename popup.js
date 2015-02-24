chrome.tabs.getSelected(null, function(tab) {
  var deepLink = tab.url.replace(/\a[\d]+w[\d]+p[\d]+/, 'ACCOUNT_ID').substr(38)
  document.getElementById('content').innerHTML = 
  'localhost:8080/deeplinker/?ga=' + deepLink;
});
