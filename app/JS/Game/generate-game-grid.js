import Cell from "./Cell/Cell.js";

class GameBoard {
  generateGameBoard(row, rowsLength) {
    const matrix = [];

    for (let i = 0; i < row; i++) {
      const row = [];
      for (let j = 0; j < rowsLength; j++) {
        const cell = new Cell();
        row.push(cell);
      }

      matrix.push(row);
    }

    return matrix;
  }
}

const gameOfLifeBoard = new GameBoard();

console.log(gameOfLifeBoard.generateGameBoard(3, 3));
console.log(gameOfLifeBoard.matrix);

export default GameBoard;
