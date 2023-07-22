import generateGameGrid from "./gameOfLife.js";

describe("Given a generateGameGrid function,", () => {
  describe("When is called", () => {
    test("Then it should return an array of arrays", () => {
      const grid = [[], [], []];

      const gameOfLifeGrid = generateGameGrid();

      expect(gameOfLifeGrid).toEqual(grid);
    });
  });
});
