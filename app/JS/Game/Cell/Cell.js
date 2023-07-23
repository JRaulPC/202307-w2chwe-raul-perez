class Cell {
  isAlive;

  constructor() {
    this.isAlive = Math.random() < 0.25;
  }

  live() {
    this.isAlive = true;
  }
}

export default Cell;
