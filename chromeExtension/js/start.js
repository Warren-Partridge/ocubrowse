
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
  console.log("Scrolling down", yAxis);
  window.scrollBy(0, 7); // first val is x value you want to change by; second val is y value
  resetQ();
}

function scrollUp() {
  console.log("Scrolling up ", yAxis);
  window.scrollBy(0, -7);
  resetQ();
}

function resetQ() {
  for (j = 0; j < recentQ.size(); j++) {
    recentQ.remove();
    recentQ.add(400);
  }
}


function getAvgXAxis() {
  var total = 0;
  for (i = 0; i < recentQ.size(); i++) {
    total += recentQ.data[i][0];
  }

  return total / recentQ.size()
}

function getAvgYAxis() {
  var total = 0;
  console.log(recentQ.data[i]);
  for (i = 0; i < recentQ.size(); i++) {
    total += recentQ.data[i][1];
  }

  return total / recentQ.size()
}



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

  console.log("current avgxaxis is ", avgXAxis);
  console.log("current avgyaxis is ", avgYAxis);

  if (avgYAxis > 0 && avgYAxis < 150) { scrollUp(); }

  else if (avgYAxis > 650 && avgYAxis < 800) { scrollDown(); }

  else if ((avgYAxis > 150 && avgYAxis < 650) && (avgXAxis > 1150 && avgXAxis < 1400)) {
    console.log("BUTTON PRESS!");
  }


});


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