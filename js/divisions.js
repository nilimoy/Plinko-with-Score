class Divisions {
    constructor(x, y, b, c) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, b, c, options);
        this.b = b;
        this.c = c;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.b, this.c);
    }
};