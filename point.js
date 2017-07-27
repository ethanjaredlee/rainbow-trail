function Point(c) {
    this.pos = createVector(width/2, height/2);
    this.pastPos = createVector(width/2, height/2);
    this.color = c;
    this.velocity = createVector(0, 0);

    this.display = function() {
        fill(this.color, 90, 90);
        ellipse(this.pos.x, this.pos.y, 30, 30);
    }

    this.move = function() {
        this.velocity = createVector(mouseX, mouseY).sub(this.pos).normalize();
        this.pastPos = this.pos.copy();
        this.pos.add(this.velocity.mult(2));
    }

    this.follow = function(dot) {
        this.pastPos = this.pos.copy();
        this.pos = dot.pastPos.copy();
    }

    this.explode = function() {
        var direction = createVector(random(-1, 1), random(-1, 1));
        this.velocity = direction.normalize();
        this.pos.add(this.velocity.mult(random(2, 8)));
        if (mouseIsPressed) {
            this.move();
        }
    }
}
