chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    //code: 'console.log("Clicked popup");'
    code: 'var div=document.createElement("div"); document.body.appendChild(div); div.innerText="test123";'
    //file: "start.js"
  });
});


