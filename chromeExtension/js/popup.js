function startWebgazer() {
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
}

document
  .getElementById("start-webgazer")
  .addEventListener("click", startWebgazer);





// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//   if (changeInfo.status == 'complete') {
//     chrome.tabs.executeScript({
//       file: "js/jquery.min.js"
//     });
//     chrome.tabs.executeScript({
//       file: "js/webgazer.js"
//     });
//     chrome.tabs.executeScript({
//       file: "js/makeBackButtonOverlay.js"
//     });
//     chrome.tabs.executeScript({
//       file: "js/makeClickButtonOverlay.js"
//     });
//     chrome.tabs.executeScript({
//       file: "js/start.js"
//     });
//   }
// });


// window.onload=function(){
//     chrome.tabs.executeScript({
//       file: "js/jquery.min.js"
//     });
//     chrome.tabs.executeScript({
//       file: "js/webgazer.js"
//     });
//     chrome.tabs.executeScript({
//       file: "js/makeBackButtonOverlay.js"
//     });
//     chrome.tabs.executeScript({
//       file: "js/makeClickButtonOverlay.js"
//     });
//     chrome.tabs.executeScript({
//       file: "js/start.js"
//     });
// };