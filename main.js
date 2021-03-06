canvas = document.getElementById("Canvas");
ctx = canvas.getContext("2d");
background_img = "mars.jpg";
RoverImage = "rover.png";
RovW=100;
RovH=90;
RovY = 10;
RovX = 10;

function add() {
    Ba1 = new Image();
    Ba1.onload = uploadBackground;
    Ba1.src = background_img;

    Ro1 = new Image();
    Ro1.onload = uploadRover;
    Ro1.src = RoverImage;
}

function uploadBackground() {
    ctx.drawImage(Ba1, 0,0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(Ro1, RovX, RovY, RovW, RovH);
}

window.addEventListener("keydown", ASCII);
function ASCII(e){
    keyp=e.keycode;
    if(keyp == "38") {
        up();
        console.log("up");
    }

    if(keyp == "40") {
        down();
        console.log("down");
    }

    if(keyp == "37") {
        left();
        console.log("left");
    }

    if(keyp == "39") {
        right();
        console.log("right");
    }
}
