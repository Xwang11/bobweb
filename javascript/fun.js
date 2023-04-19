// Set up Canvas
const canvas = document.getElementById("theCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 100;


// Define vector class -> used for directions
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const images = ['https://bobweb.page/images/SphericalBob.png', '../images/SphericalBob.png', '../images/electron.png'];
var imgIndex = 0;

// Define light class -> The moving object
class Light {
    constructor(x, y, vel, dir, size) {
        this.x = x;
        this.y = y;
        this.vel = vel;
        this.dir = dir; //vector
        this.size = size; //int
    }

    draw() {
        // ctx.beginPath();
        // ctx.fillStyle = "#FB1";
        // ctx.fillRect(this.x, this.y, 10, 10);
        // ctx.closePath();

        var img = new Image();
        img.src = images[imgIndex];
        img.onload = function () {
            ctx.drawImage(img, this.x, this.y, this.size, this.size);
            console.log("done");
        }
    }
}

// Declare new instance of light object
var vec = new Vector(1, 1);
var light = new Light(0, 0, 50, vec, 260);
var snake = false;

// Animating
function draw() {
    if (ongoing) {
        if (!snake) {
            ctx.clearRect(0,0, canvas.width, canvas.height);
        }
        var newLight = new Light(light.x + light.dir.x * light.vel, light.y + light.dir.y * light.vel, light.vel, light.dir, light.size);
        light = newLight;
        light.draw();
        var message = `x: ${light.x}  y: ${light.y}  width: ${canvas.width}  height: ${canvas.height}`;
        console.log(message);

        // Collisions
        if (light.x > canvas.width - light.size || light.x < 0) {
            const newVec = new Vector(light.dir.x * (-1), light.dir.y);
            var newLight = new Light(light.x, light.y, light.vel, newVec, light.size);
            light = newLight;
        }
        if (light.y > (canvas.height - light.size) || light.y < 0) {
            const newVec = new Vector(light.dir.x, light.dir.y * (-1));
            var newLight = new Light(light.x, light.y, light.vel, newVec, light.size);
            light = newLight;
        }

        requestAnimationFrame(draw);

    }
}

// Update textbox
function updateInfo() {
    document.getElementById("output").innerHTML = `Speed: ${light.vel} | Size: ${light.size}`;
}

// Button functions
function start() {
    ongoing = true;
    updateInfo()
    requestAnimationFrame(draw);
}

function stop() {
    document.getElementById("output").innerHTML = "Pausing DvD simulator";
    ongoing = false;
}

function clean() {
    stop();
    document.getElementById("output").innerHTML = "Cleared Canvas";
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function speedUp() {
    var speed = light.vel + 10;
    newLight = new Light(light.x, light.y, speed, light.dir, light.size);
    light = newLight;
    updateInfo();
}

function slowDown() {
    var speed = light.vel;
    if (speed <= 0) {
        speed = 0;
    }
    else {
        speed = speed - 10;
    }
    newLight = new Light(light.x, light.y, speed, light.dir, light.size);
    light = newLight;
    updateInfo();
}

function bigger() {
    var size = light.size + 20;
    var newLight = new Light(light.x, light.y, light.vel, light.dir, size);
    light = newLight;
    updateInfo();
}

function smaller() {
    var size = light.size;
    if (size <= 20) {
        size = 20
    }
    else {
        size = size - 20;
    }
    var newLight = new Light(light.x, light.y, light.vel, light.dir, size);
    light = newLight;
    updateInfo();

}

function reset() {
    var vec = new Vector(1, 1);
    var newLight = new Light(0, 0, 50, vec, 260);
    light = newLight;
    updateInfo();
}

function next() {
    if (imgIndex >= images.length-1) {
        imgIndex = 0;
    }
    else {
        imgIndex = imgIndex + 1;
    }
    if (!snake) {
        ctx.clearRect(0,0, canvas.width, canvas.height);
    }
    light.draw();
}

function snakeToggle() {
    snake = !snake;
    console.log(snake);
}


/*
Goals for future:
- Rotating image on collisions
- More complicated collisions utilizing snells law
- Multiple objects that interact with each other (electrons and protons?)
 */