class Splatter {
    constructor(_x, _y) {
        this.px = _x;
        this.py = _y;
        // this.xsize = _xsize;
        // this.ysize = _ysize;
        this.spacing = random(10);
        this.spill = random(1);
        this.points = [];
    }

    splat(xsize, ysize) {
        for (let theta = 0; theta < 360; theta++) {
            let x = xsize * cos(theta);
            let y = ysize * sin(theta);
            if (this.points.length < 361) {
                this.points[theta] = createVector(x, y);
               
            }
            if (xsize > 10  && ysize > 10) {
                //if (this.spill > 0.5 && xsize > 4  && ysize > y) {
                this.splat(xsize*0.67, ysize*0.67);
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