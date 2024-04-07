export const convertLogicalCoordinates = (x: number, y: number, width: number, height: number) => {
  return { x: x * width, y: y * height };
};

export class Observable {
  private observers: Array<Function> = [];

  subscribe(observer: Function): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Function): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data: any): void {
    this.observers.forEach((obs) => obs(data));
  }
}

export class Obeserver {
  private observable: Observable;

  constructor(observable: Observable) {
    this.observable = observable;
  }

  subscribe(observer: Function): void {
    this.observable.subscribe(observer);
  }

  unsubscribe(observer: Function): void {
    this.observable.unsubscribe(observer);
  }
}
