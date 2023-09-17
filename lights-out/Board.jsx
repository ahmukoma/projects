import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 3, ncols = 3, chanceLightStartsOn = 33 }) {
  const [board, setBoard] = useState(createBoard());

  function createBoard() {
    let initialBoard = [];
    for(let i = 0; i < nrows; i++){
      let row = [];
      for(let j = 0; j < ncols; j++){
        row.push(Math.random() < chanceLightStartsOn/100);
      }
      initialBoard.push(row);
    }
    return initialBoard;
  }

  function hasWon() {
    for(let row of board){
      for(let col of row){
        if (col) return false;
      }
    }
    
    return true;
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      const copyOfBoard = JSON.parse(JSON.stringify(oldBoard));
      flipCell(y-1, x, copyOfBoard);
      flipCell(y+1, x, copyOfBoard);
      flipCell(y, x, copyOfBoard);
      flipCell(y, x-1, copyOfBoard);
      flipCell(y, x+1, copyOfBoard);
      return copyOfBoard;
    });
  }

  if (hasWon()) return <h1>You won the game!</h1>;

  return(
    <table className="Board">
      <tbody>
        {board.map((row, i) => (
          <tr key={i}>
            {row.map((col, j) => (
              <Cell isLit={col} key={j} flipCellsAroundMe={() => flipCellsAround(`${i}-${j}`)}/>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Board;
