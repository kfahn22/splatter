class Splatter{
    constructor(_x, _y) {
        this.px = _x;
        this.py = _y;
        this.xsize = random(10, 50);
        this.ysize = random(10, 50);
        this.spacing = random(10);
        this.spill = true;
        this.points = [];
    }

    splat() {
        for (let theta = 0; theta < 360; theta++) {
          let x = this.xsize * cos(theta);
          let y = this.ysize * sin(theta);
          this.points.push(createVector(x,y));
        }
     }

     show() {
         fill(255);
         beginShape();
         for (p of points) {
             vertex(p.x, p.y);
         }
     }
}