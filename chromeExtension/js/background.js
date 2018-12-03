
//
// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript({
//     //code: 'console.log("Clicked popup");'
//     //code: 'var div=document.createElement("div"); document.body.appendChild(div); div.innerText="test123";'
//     file: "demo/public/javascripts/webgazer.js"
//   });
//   chrome.tabs.executeScript({
//     //code: 'console.log("Clicked popup");'
//     //code: 'var div=document.createElement("div"); document.body.appendChild(div); div.innerText="test123";'
//     file: "js/start.js"
//   });
// });
//

// console.log("background.js loaded!");
//
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     // console.log(sender.tab ?
//     //   "from a content script:" + sender.tab.url :
//     //   "from the extension");
//     // if (request.greeting == "hello")
//     //   sendResponse({farewell: "goodbye"});
//
//     console.log("spaghetti");
//     sendResponse({farewell: "goodbye"});
//     chrome.tabs.goBack();
//   });

//
// window.onload=function(){
//   console.log("page load!");
// }


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('The request has been received from the content script.');
    chrome.tabs.executeScript({
      file: "js/jquery.min.js"
    });
    chrome.tabs.executeScript({
      file: "js/webgazer.js"
    });
    chrome.tabs.executeScript({
      file: "js/makeBackButtonOverlay.js"
    });
    chrome.tabs.executeScript({
      file: "js/makeClickButtonOverlay.js"
    });
    chrome.tabs.executeScript({
      file: "js/start.js"
    });
});


// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//   if (changeInfo.status == 'complete') {
//
//   }
// });

//
// window.onload=function(){
//   chrome.tabs.executeScript({
//     file: "js/jquery.min.js"
//   });
//   chrome.tabs.executeScript({
//     file: "js/webgazer.js"
//   });
//   chrome.tabs.executeScript({
//     file: "js/makeBackButtonOverlay.js"
//   });
//   chrome.tabs.executeScript({
//     file: "js/makeClickButtonOverlay.js"
//   });
//   chrome.tabs.executeScript({
//     file: "js/start.js"
//   });
// };