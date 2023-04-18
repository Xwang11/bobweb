const canvas = document.getElementById("theCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 100;

let x = 0;
let y = 50;
let n = 1;
let size = 40;
x=x+size;

ctx.fillStyle = "#FB1";
ctx.beginPath();
ctx.arc(x,y,size,0,2*Math.PI)
ctx.fill();

// Funwction to draw and update the canvas
function draw() {
    
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    // Draws circle
    ctx.fillStyle = "#FB1";
    ctx.beginPath();
    ctx.arc(x,y,size,0,2*Math.PI)
    ctx.fill();

    // Update circle position for next frame
    x = x + n*10
    console.log(x);

    // Bounch mechanic
    if (x>canvas.width-size || x < size) {
        n = n*(-1)
    }

    // Recursivly call next frame
    requestAnimationFrame(draw)
}

// Function accessed by button to initialize animation
function start() {
    document.getElementById("output").innerHTML = "Hello World, I am Bob";
    requestAnimationFrame(draw);
}