console.log( "start.js loaded!" );

webgazer.begin(); // turns on wgazer
webgazer.showPredictionPoints(true);
// setTimeout(function(){
//   webgazer.end();
//   alert("data saved");
// },3000);
webgazer.setGazeListener(function(data, elapsedTime) {
  if (data == null){
    return;
  }
  console.log(data);
});