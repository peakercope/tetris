import { Brick } from '../brick/brick.model';

export class Figure {
  public bricks: Array<Brick>;
  constructor(bricks: Array<Brick>) {
    this.bricks = bricks;
  }

  rotate(): void {}

  moveDown(): void {
    this.bricks.forEach((brick) => {
      brick.shape.y(brick.shape.y() + 1);
    });
  }

  moveLeft(): void {
    this.bricks.forEach((brick) => {
      brick.shape.x(brick.shape.x() - 1);
    });
  }

  moveRight(): void {
    this.bricks.forEach((brick) => {
      brick.shape.x(brick.shape.x() + 1);
    });
  }
}
