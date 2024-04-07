import Konva from 'konva';
import { Observable } from '../../utils/lib';

export class Brick extends Observable {
  public shape: Konva.Rect;
  private width = 5;
  private height = 5;
  private x: number;
  private y: number;
  private fill: string = 'red';

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    this.shape = new Konva.Rect({
      x: x * this.width,
      y: y * this.height,
      width: this.width,
      height: this.height,
      fill: this.fill,
    });
  }
}
