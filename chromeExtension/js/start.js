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

const recentQ = new Queue();
for (i = 0; i < 10; i++) {
  recentQ.add(400);
}
var yAxis = 0;
webgazer.begin(); // turns on wgazer
webgazer.showPredictionPoints(true); //red dot
// setTimeout(function(){
//   webgazer.end();
//   alert("data saved");
// },3000);

function avgVal() {
  var sum = 0;
  for (x = 0; x < recentQ.size(); x++) {
    sum += recentQ.data[x];
  }
  return sum / recentQ.size();
}

function scrollDown() {
  //console.log("Scrolling down", yAxis);
  window.scrollBy(0, 7); // first val is x value you want to change by; second val is y value
  resetQ();
}

function scrollUp() {
  //console.log("Scrolling up ", yAxis);
  window.scrollBy(0, -7);
  resetQ();
}

function resetQ() {
  for (j = 0; j < recentQ.size(); j++) {
    recentQ.remove();
    recentQ.add(400);
  }
}

function getAvgYAxis() {
  var total = 0;
  for (i = 0; i < recentQ.size(); i++) {
    total += recentQ.data[i];
  }

  return total / recentQ.size();
}

webgazer.setGazeListener(function(data, elapsedTime) {
  if (data == null) {
    return;
  }

  // adjust yaxis
  yAxis = data.y;
  recentQ.remove();
  recentQ.add(yAxis);

  var avgYAxis = getAvgYAxis();

  //console.log("current avgyaxis is ", avgYAxis);

  if (avgYAxis > 0 && avgYAxis < 150) {
    scrollUp();
  } else if (avgYAxis > 650 && avgYAxis < 800) {
    scrollDown();
  }

  var midDiff = 100000000;
  var currentLinkToBeClicked = "";
  var windowHeightOverTwo = $(window).height() / 2;
  var middleHeight = $(window).scrollTop() + windowHeightOverTwo;
  var links = document.getElementsByTagName("a");

  var tempArr = [];
  for (var x = 0; x < links.length; x++) {
    //HMMMMMMMMM
    var position = $(links[x]).offset();
    var linkHeight = position.top;
    tempArr.push(linkHeight);
  }
  for (var i = 0, l = links.length; i < l; i++) {
    if (isScrolledIntoView(links[i])) {
      //HMMMMMMMMM
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
  // var upFlag = true;
  // var downFlag = true;
  //
  // for (j = 0; j < recentQ.size(); j++) {
  //   if (recentQ.data[j] < 200) {
  //     downFlag = false;
  //     break;
  //   }
  // }
  // for (k = 0; k < recentQ.size(); k++) {
  //   if (recentQ.data[k] > 500) {
  //     upFlag = false;
  //     break;
  //   }
  // }
  // if (upFlag) {
  //   scrollUp();
  // } else if (downFlag) {
  //   scrollDown();
  // }
});
