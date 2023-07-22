class Cell {
  isAlive = Math.random() < 0.25;

  live() {
    this.isAlive = true;
  }
}

const newCell = new Cell();
console.log(newCell);

export default Cell;
