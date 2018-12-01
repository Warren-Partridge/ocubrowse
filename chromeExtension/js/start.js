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
  console.log("Scrolling down");
  console.log(avgVal() + 200);
  window.scrollBy(0, avgVal() + 200);
  resetQ();
}

function scrollUp() {
  console.log("Scrolling up");
  console.log(-1 * avgVal());
  window.scrollBy(0, -1 * avgVal());
  resetQ();
}

function resetQ() {
  for (j = 0; j < recentQ.size(); j++) {
    recentQ.remove();
    recentQ.add(400);
  }
}

webgazer.setGazeListener(function(data, elapsedTime) {
  if (data == null) {
    return;
  }
  yAxis = data.y;
  recentQ.remove();
  recentQ.add(yAxis);
  var upFlag = true;
  var downFlag = true;
  for (j = 0; j < recentQ.size(); j++) {
    if (recentQ.data[j] < 200) {
      downFlag = false;
      break;
    }
  }
  for (k = 0; k < recentQ.size(); k++) {
    if (recentQ.data[k] > 500) {
      upFlag = false;
      break;
    }
  }
  if (upFlag) {
    scrollUp();
  } else if (downFlag) {
    scrollDown();
  }
});
