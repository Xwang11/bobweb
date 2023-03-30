var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);

function doThing() {
    document.getElementById("output").innerHTML = "Hello World, I am Bob";
}