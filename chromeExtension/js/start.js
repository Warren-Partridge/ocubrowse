function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function Queue() {
  this.data = [];
}

Queue.prototype.add = function(record) {
  this.data.unshift(record);
};

Queue.prototype.remove = function() {
  this.data.pop();
};

Queue.prototype.first = function() {
  return this.data[0];
};

Queue.prototype.last = function() {
  return this.data[this.data.length - 1];
};

Queue.prototype.size = function() {
  return this.data.length;
};

function scrollDown() {
  window.scrollBy(0, 10); // first val is x value you want to change by; second val is y value
  resetQ();
}

function scrollUp() {
  window.scrollBy(0, -10);
  resetQ();
}

function resetQ() {
  for (j = 0; j < recentQ.size(); j++) {
    recentQ.remove();
    recentQ.add(400);
  }
}

function resetHoverTime() {
  clickButtonHoverTime = 0;
  backButtonHoverTime = 0;
  var toSetClick = "rgba(47, 208, 89, 0)";
  var toSetBack = "rgba(171, 46, 185, 0)";

  document.getElementById("overlay-click-button").style.backgroundColor = toSetClick;
  document.getElementById("overlay-back-button").style.backgroundColor = toSetBack;
}

function incrementClickButtonHoverTime() {
  clickButtonHoverTime++;

  var toSet = "rgba(47, 208, 89, " + clickButtonHoverTime / 100 + ")";

  document.getElementById("overlay-click-button").style.background = toSet;
}

function incrementBackButtonHoverTime() {
  backButtonHoverTime++;

  var toSet = "rgba(171, 46, 185, " + backButtonHoverTime / 100 + ")";

  document.getElementById("overlay-back-button").style.background = toSet;
}

function getAvgXAxis() {
  var total = 0;
  for (i = 0; i < recentQ.size(); i++) {
    total += recentQ.data[i][0];
  }

  return total / recentQ.size();
}

function getAvgYAxis() {
  var total = 0;
  console.log(recentQ.data[i]);
  for (i = 0; i < recentQ.size(); i++) {
    total += recentQ.data[i][1];
  }

  return total / recentQ.size();
}


function saveDataBeforePageChange() {
  webgazer.end();

  var unparsedStorage = window.localStorage.getItem("webgazerGlobalData");

  chrome.runtime.sendMessage({command: "save data", webgazerData: unparsedStorage});



  // settings = storage.settings;
  // data = storage.data;
  // for (var reg in regs) {
  //   regs[reg].setData(storage.data);
  // }


  alert("data saved");
}

var clickButtonHoverTime = 0;
var backButtonHoverTime = 0;
webgazer.setGazeListener(function(data, elapsedTime) {
  if (data == null) {
    return;
  }

  var xAxis = data.x;
  var yAxis = data.y;

  recentQ.remove();
  recentQ.add([xAxis, yAxis]);

  var avgXAxis = getAvgXAxis();
  var avgYAxis = getAvgYAxis();

  var midDiff = 100000000;
  var currentLinkToBeClicked = "";
  var windowHeightOverTwo = $(window).height() / 2;
  var middleHeight = $(window).scrollTop() + windowHeightOverTwo;
  var links = document.getElementsByTagName("a");

  for (var i = 0, l = links.length; i < l; i++) {

    if (isScrolledIntoView(links[i])) {
      var position = $(links[i]).offset();
      var linkHeight = position.top;
      if (Math.abs(middleHeight - linkHeight) < midDiff) {
        midDiff = Math.abs(middleHeight - linkHeight);
        currentLinkToBeClicked = links[i];
      }
    }
  }

  for (var i = 0, l = links.length; i < l; i++) {
    if (links[i] == currentLinkToBeClicked) {
      links[i].style.backgroundColor = "#FFFF00";
    } else {
      links[i].style.backgroundColor = "";
    }
  }


  if (avgYAxis > -100 && avgYAxis < 150) {
    scrollUp();
    resetHoverTime();
  } else if (avgYAxis > 650 && avgYAxis < 1000) {
    scrollDown();
    resetHoverTime();
  } else if ( // THIS IS THE IF CASE FOR THE CLICK BUTTON
    avgYAxis > 150 &&
    avgYAxis < 650 &&
    (avgXAxis > 1150 && avgXAxis < 1400)
  ) {
    incrementClickButtonHoverTime(); // If we get here the user might be trying to press the button, so let's increment a var to keep track of how long they have looked here

    if (clickButtonHoverTime >= 100) {
      // If they have consistently looked here, then press the button
      console.log("BUTTON PRESS!", clickButtonHoverTime);

      saveDataBeforePageChange();

      window.open(currentLinkToBeClicked.href, "_self");
      resetHoverTime();
    } else {
      console.log("Haven't hovered long enough.", clickButtonHoverTime);
    }
  } else if ( // THIS IS THE IF CASE FOR THE BACK BUTTON
    avgYAxis > 150 &&
    avgYAxis < 650 &&
    (avgXAxis > 0 && avgXAxis < 400)
  ) {
    incrementBackButtonHoverTime(); // If we get here the user might be trying to press the button, so let's increment a var to keep track of how long they have looked here

    if (backButtonHoverTime >= 100) {
      // If they have consistently looked here, then press the button
      console.log("BUTTON PRESS!", backButtonHoverTime);

      saveDataBeforePageChange();

      history.go(-1);

      resetHoverTime();
    } else {
      console.log("Haven't hovered long enough.", backButtonHoverTime);
    }
  }

  else {
    resetHoverTime();
  }

  if (avgYAxis > 0 && avgYAxis < 150) {
    scrollUp();
  } else if (avgYAxis > 650 && avgYAxis < 800) {
    scrollDown();
  }
});

const recentQ = new Queue();
for (i = 0; i < 10; i++) {
  recentQ.add(400);
}
var yAxis = 0;
webgazer.begin(); // turns on wgazer
webgazer.showPredictionPoints(true); //red dot

// chrome.runtime.sendMessage({command: "load data"}, function(response) {
//   console.log(response.webgazerResponse);
// });
webgazer.loadGlobalData();
// chrome.storage.local.get(['myKey'], function(result) {
//   console.log(result.myKey);
//
//   var pulledVal = JSON.parse(result.myKey);
//   settings = pulledVal.settings;
//   data = pulledVal.data;
//   for (var reg in regs) {
//     regs[reg].setData(storage.data);
//   }
//
// });



//
// var storage = JSON.parse(window.localStorage.getItem(localstorageLabel)) || defaults;
// settings = storage.settings;
// data = storage.data;
// for (var reg in regs) {
//   regs[reg].setData(storage.data);
// }

// setTimeout(function(){
//   webgazer.end();
//   alert("data saved");
// },3000);


// /**
//  * Loads the global data and passes it to the regression model
//  */
// function loadGlobalData() {
//   var storage = JSON.parse(window.localStorage.getItem(localstorageLabel)) || defaults;
//   settings = storage.settings;
//   data = storage.data;
//   for (var reg in regs) {
//     regs[reg].setData(storage.data);
//   }
// }
//
// /**
//  * Constructs the global storage object and adds it to local storage
//  */
// function setGlobalData() {
//   var storage = {
//     'settings': settings,
//     'data': regs[0].getData() || data
//   };
//   window.localStorage.setItem(localstorageLabel, JSON.stringify(storage));
//   //TODO data should probably be stored in webgazer object instead of each regression model
//   //     -> requires duplication of data, but is likely easier on regression model implementors
// }