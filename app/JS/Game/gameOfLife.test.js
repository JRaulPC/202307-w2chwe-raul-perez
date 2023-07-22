import GameBoard from "./generate-game-grid.js";

describe("Given a GameBoard generateGameBoard method,", () => {
  describe("When is called with a number of rows 3 and row length 3", () => {
    test("Then it should return an array with 3 length", () => {
      const grid = 3;
      const numOfRows = 3;
      const rowsLenght = 3;

      const emptyGameBoard = new GameBoard();

      const gameOfLifeGrid = emptyGameBoard.generateGameBoard(
        numOfRows,
        rowsLenght
      );

      expect(gameOfLifeGrid).toHaveLength(grid);
    });
  });
});
