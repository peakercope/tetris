import { convertLogicalCoordinates } from '../../utils/lib';
import { Brick } from '../brick/brick.model';

class TetrisGameField {
  private brickMatrix: Array<Array<boolean>>;
  constructor(
    public width: number,
    public height: number
  ) {
    this.brickMatrix = new Array(this.width).fill(new Array(this.height).fill(false));
  }

  findFullRows(): number[] {
    return this.brickMatrix.reduce((acc: Array<number>, row, index: number) => {
      if (row.every((cell) => cell)) {
        acc.push(index);
      }
      return acc;
    }, []);
  }

  shiftRowsDown(rows: number[], offset: number): void {
    rows.forEach((row) => {
      this.brickMatrix.splice(row, 1);
      this.brickMatrix.unshift(new Array(this.width).fill(false));
    });
  }

  //TODO: remove this method
  addBrick(brick: Brick, x: number, y: number): void {
    brick.notify({ x, y });
    this.brickMatrix[x][y] = true;
  }
}
