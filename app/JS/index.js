import GameBoard from "./Game/GameBoard/GameBoard.js";

const playGameOfLife = () => {
  const numOfRows = 3;
  const rowsLength = 3;
  const newGameBoard = new GameBoard(numOfRows, rowsLength);
  const filledBoard = newGameBoard.fillMatrix();

  return filledBoard;
};

console.log(playGameOfLife());
