class Splatter {
    constructor(_x, _y, _xsize, _ysize) {
        this.px = _x;
        this.py = _y;
        this.xsize = _xsize;
        this.ysize = _ysize;
        // this.xsize = 40;
        // this.ysize = 50;
        this.spacing = random(10);
        this.spill = true;
        this.points = [];
    }

    splat() {
        for (let theta = 0; theta < 360; theta++) {
            let x = this.xsize * cos(theta);
            let y = this.ysize * sin(theta);
            if (this.points.length < 361) {
                this.points[theta] = createVector(x, y);
               
            }
        }
    }

        show() {
            translate(this.px, this.py);
            fill(255);
            stroke(255);
            beginShape();
            for (let p of this.points) {
                vertex(p.x, p.y);
            }
            endShape(CLOSE);
        }
    }