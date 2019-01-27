// "augmenting native DOM functions isn't always the best or most popular solution, but this works fine for modern browsers."
// perhaps this is unnecessary?

// Element.prototype.remove = function() {
//   this.parentElement.removeChild(this);
// }
// NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
//   for(var i = this.length - 1; i >= 0; i--) {
//     if(this[i] && this[i].parentElement) {
//       this[i].parentElement.removeChild(this[i]);
//     }
//   }
// }



var startCalibration = () => {
  console.log("Start calibration triggered");
  revealCalibrationDots();
}

var revealCalibrationDots = () => {
  console.log("Calibration dots revealed");
  document.getElementById("mainTitle").remove();
  // document.getElementById("mainTitle").style.display = "block";
}
