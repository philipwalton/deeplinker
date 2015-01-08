chrome.tabs.getSelected(null, function(tab) {
  var deepLink = tab.url.replace(/\a[\d]+w[\d]+p[\d]+/, 'ACCOUNT_ID').substr(38)
  document.getElementById('content').innerHTML = 
  'http://www.ga-dev-tools.com/r?ga=' + deepLink;
});
