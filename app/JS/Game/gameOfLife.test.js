import Cell from "./Cell/Cell.js";
import GameBoard from "./GameBoard/GameBoard.js";

const numOfRows = 3;
const rowsLenght = 3;
const emptyGameBoard = new GameBoard(numOfRows, rowsLenght);
const gameOfLifeGrid = emptyGameBoard.fillMatrix();
const length = 3;

describe("Given a GameBoard,", () => {
  describe("When is called with a number of rows 3 and row length 3", () => {
    test("Then it should return an array with 3 length", () => {
      expect(emptyGameBoard).toHaveLength(length);
    });

    test("Each array within the main array should return an array with length of 3", () => {
      expect(gameOfLifeGrid[0]).toHaveLength(length);
    });
    test("Then each position position of the arrays inside themain array should have an instance of the class 'Cell", () => {
      expect(gameOfLifeGrid[0][0]).toBeInstanceOf(Cell);
    });
  });
});
