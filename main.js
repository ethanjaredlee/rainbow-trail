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
    dots[0].move();
    for (i = 1; i < dots.length; i++) {
        dots[i].follow(dots[i-1]);
        console.log(dots[i].pos)
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].display();
    }
}
