function startWebgazer() {
  chrome.tabs.executeScript({ // Run this first so that start.js knows what webgazer is
    file: 'demo/public/javascripts/webgazer.js'
  });
  chrome.tabs.executeScript({
    file: 'js/start.js'
  });
}

document.getElementById('start-webgazer').addEventListener('click', startWebgazer);