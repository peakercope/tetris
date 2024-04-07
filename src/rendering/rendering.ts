import { Brick } from '../model/brick/brick.model';
import { Figure } from '../model/figure/figure.model';

// O O
// O O
const figureO: Figure = new Figure([new Brick(0, 0), new Brick(1, 0), new Brick(0, 1), new Brick(1, 1)]);

// X
// X
// X
// X
const figureI: Figure = new Figure([new Brick(0, 0), new Brick(0, 1), new Brick(0, 2), new Brick(0, 3)]);

//  X
// XXX
const figureT: Figure = new Figure([new Brick(0, 0), new Brick(-1, 0), new Brick(1, 0), new Brick(0, 1)]);

// L
// L
// LL
const figureL: Figure = new Figure([new Brick(0, 0), new Brick(0, 1), new Brick(0, 2), new Brick(1, 2)]);

// J
// J
// JJ
const figureJ: Figure = new Figure([new Brick(0, 0), new Brick(0, 1), new Brick(0, 2), new Brick(-1, 2)]);

//  S
// SS
// S
const figureS: Figure = new Figure([new Brick(0, 0), new Brick(1, 0), new Brick(0, 1), new Brick(-1, 1)]);

// Z
// ZZ
//  Z
const figureZ: Figure = new Figure([new Brick(0, 0), new Brick(-1, 0), new Brick(0, 1), new Brick(1, 1)]);

const allFigures: Figure[] = [figureO, figureI, figureT, figureL, figureJ, figureS, figureZ];

export class Renderer {
  renderFigure(figure: Figure): void {
    figure.bricks.forEach((brick) => {
      brick.shape.draw();
    });
  }
}
