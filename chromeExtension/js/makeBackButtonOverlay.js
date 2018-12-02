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
myP.innerText = "Hover me to go back";


document.body.appendChild(myDiv);

var topDiv = document.createElement("div");
var botDiv = document.createElement("div");

topDiv.style.background = "rgba(255, 255, 0, 0)";
topDiv.style.position = "fixed";
topDiv.style.border = "5px solid rgb(255, 255, 0)";
topDiv.style.opacity = "100%";
topDiv.style.borderRadius = "10px";
topDiv.style.top = "0%";
topDiv.style.width = "100%";
topDiv.style.height = "12%";
topDiv.style.display = "table";

botDiv.style.background = "rgba(255, 255, 0, 0)";
botDiv.style.position = "fixed";
botDiv.style.border = "5px solid rgb(255, 255, 0)";
botDiv.style.opacity = "100%";
botDiv.style.borderRadius = "10px";
botDiv.style.top = "88%";
botDiv.style.width = "100%";
botDiv.style.height = "12%";
botDiv.style.display = "table";

document.body.appendChild(topDiv);
document.body.appendChild(botDiv);