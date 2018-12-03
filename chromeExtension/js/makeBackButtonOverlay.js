var myDiv = document.createElement("div");
var myP = document.createElement("p");

myDiv.id = "overlay-back-button";
myDiv.appendChild(myP);

myDiv.style.background = "rgba(171, 46, 185, 0)";
myDiv.style.alignSelf = "right";
myDiv.style.position = "fixed";
myDiv.style.border = "5px solid rgb(171, 46, 185)";
myDiv.style.opacity = "100%";
myDiv.style.borderRadius = "10px";
myDiv.style.top = "30%";
myDiv.style.left = "2%";
myDiv.style.width = "300px";
myDiv.style.height = "300px";
myDiv.style.textAlign = "center";
myDiv.style.display = "table";

myP.style.display = "table-cell";
myP.style.verticalAlign = "middle";
myP.innerText = "hover me to go back";


document.body.appendChild(myDiv);
