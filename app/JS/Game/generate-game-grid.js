import Cell from "./Cell/Cell.js";

class GameBoard {
  generateGameBoard(row, rowsLength) {
    const cellRow = [];

    for (let i = 0; i < row; i++) {
      const row = [];
      for (let j = 0; j < rowsLength; j++) {
        const cell = new Cell();
        row.push(cell);
      }

      cellRow.push(row);
    }

    return cellRow;
  }
}

const gameOfLifeBoard = new GameBoard();

console.log(gameOfLifeBoard.generateGameBoard(3, 3));

export default GameBoard;
