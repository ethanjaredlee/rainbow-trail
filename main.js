var dots = [];
var starter;
var quantity = 150;

function setup() {
    createCanvas(600, 400);
    starter = new Point(0);
    dots.push(starter);
}

function draw() {
    noStroke();
    background(51);
    if (dots.length < quantity) {
        dots.push(new Point(dots.length));
    }

    if (keyIsPressed) {
        for (i = 0; i < dots.length; i++) {
            dots[i].explode();
        }
    } else if (mouseIsPressed) {
        for (i = 0; i < dots.length; i++) {
            dots[i].move();
        }
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].display();
    }
}
