import Cell from "../Cell/Cell.js";

class GameBoard {
  matrix;

  constructor(numOfRows, rowsLength) {
    this.matrix = new Array(numOfRows).fill(new Array(rowsLength).fill());
  }

  fillMatrix() {
    const filledMatrix = this.matrix;

    for (let i = 0; i < filledMatrix.length; i++) {
      for (let j = 0; j < filledMatrix[i].length; j++) {
        const cell = new Cell();
        filledMatrix[i][j] = cell;
      }
    }

    return filledMatrix;
  }
}

export default GameBoard;
