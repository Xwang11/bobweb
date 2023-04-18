/* 
Goal: Pong
- Define ball object
    - Has radius, color, position(x,y), direction (vector?), velocity
    - Function: calculateDirection(vector) - updates direction according to given vector
    - Function: updaatePosition - changes position accordin to direction

- Define player object
    - Has position, size
    - Can be moved up and down
    - Has direction vector facing away

- Define vector object
    - contains [x,y]

- Function: draw() - draws all the shapes onto canvas
- Function: start() - given to button to start game
- Function stop() - given to button to end game

- When ball hit player, bounce at angle
    
-
*/

const canvas = document.getElementById("theCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 100;

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Ball {
    constructor(radius, position, velocity, direction) {
        this.radius = radius; //int
        this.position = position;  // vector
        this.velocity = velocity;  //int
        this.direction = direction;  //vector
    }

    draw() {
        ctx.fillStyle = "#FB1";
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

}

class Player {
    constructor(length, position, direction) {
        this.length = length; //int
        this.position = position; //vector
        this.direction = direction;  //vector
    }

    draw() {
        ctx.fillStyle = "#CSS";
        ctx.fillRect(this.position.x, this.position.y, 20, this.length);
    }
}

function setup() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var ballInitPos = new Vector(canvas.width/2, canvas.height/2);
    var ballDirection = new Vector(-1, 0);
    var ball = new Ball(20, ballInitPos, 2, ballDirection);

    var player1Position = new Vector(0, canvas.height / 2);
    var player1Direction = new Vector(1, 0);
    var player1 = new Player(80, player1Position, player1Direction);

    var player2Position = new Vector(canvas.width-20, canvas.height / 2);
    var player2Direction = new Vector(-1, 0);
    var player2 = new Player(80, player2Position, player2Direction);

    ball.draw();
    player1.draw();
    player2.draw();

}

function update() {
    requestAnimationFrame(update);
}

function start() {
    document.getElementById("output").innerHTML = "This is the pong js";
    setup();
}