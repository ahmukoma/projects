/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */


class Player{
    constructor(playerName, colorName){
        this.playerName = playerName
        this.id = `p-${colorName}`
        this.colorName = colorName;
    }
}

class Game{
    constructor(x, y){
        let p1Col = document.querySelector("#p1-col");
        let p2Col = document.querySelector("#p2-col");
        
        this.player1 = new Player("First", p1Col.value === "" ? "red" : p1Col.value);
        this.player2 = new Player("Second", p2Col.value === "" ? "blue" : p2Col.value);
        this.currPlayer = this.player1;
        this.board = [];
        this.WIDTH = x;
        this.HEIGHT = y;
        this.GAME_OVER = false;
    }
    
    makeBoard(){
        /** makeBoard: create in-JS board structure:
         *   board = array of rows, each row is array of cells  (board[y][x])
         */
        for(let y = 0; y < this.HEIGHT; y++){
            this.board.push(Array.from({ length: this.WIDTH }));
        }
    }
    
    /** makeHtmlBoard: make HTML table and row of column tops. */

    makeHtmlBoard() {
        const board = document.getElementById('board');

          // make column tops (clickable area for adding a piece to that column)
          const top = document.createElement('tr');
          top.setAttribute('id', 'column-top');
        const currentGame = this;
          top.addEventListener('click', function(e){
              currentGame.handleClick(e, currentGame);
          });

          for (let x = 0; x < this.WIDTH; x++) {
            const headCell = document.createElement('td');
            headCell.setAttribute('id', x);
            top.append(headCell);
          }

          board.append(top);

          // make main part of board
          for (let y = 0; y < this.HEIGHT; y++) {
            const row = document.createElement('tr');

            for (let x = 0; x < this.WIDTH; x++) {
              const cell = document.createElement('td');
              cell.setAttribute('id', `${y}-${x}`);
              row.append(cell);
            }

            board.append(row);
          }
    }
    
    /** findSpotForCol: given column x, return top empty y (null if filled) */
    findSpotForCol(x) {
        for (let y = this.HEIGHT - 1; y >= 0; y--) {
            if (!this.board[y][x]) {
                return y;
            }
        }
        return null;
    }
    
    /** handleClick: handle click of column top to play piece */
    
    handleClick(evt) {
        if (this.GAME_OVER){
            return;
        }
      // get x from ID of clicked cell
      const x = +evt.target.id;

      // get next spot in column (if none, ignore click)
      const y = this.findSpotForCol(x);
        
      if (y === null) {
        return;
      }

      // place piece in board and add to HTML table
      this.board[y][x] = this.currPlayer;
      this.placeInTable(y, x);

      // check for win
      if (this.checkForWin.call(this)) {
        return this.endGame(`Player ${this.currPlayer.playerName} won!`);
      }

      // check for tie
      if (this.board.every(row => row.every(cell => cell))) {
        return this.endGame('Tie!');
      }

      // switch players
      this.currPlayer = this.currPlayer === this.player1 ? this.player2 : this.player1;
    }
    
    /** placeInTable: update DOM to place piece into HTML table of board */

    placeInTable(y, x) {
      const piece = document.createElement('div');
      piece.classList.add('piece');
      piece.style.backgroundColor = this.currPlayer.colorName;
      piece.style.top = -50 * (y + 2);

      const spot = document.getElementById(`${y}-${x}`);
      spot.append(piece);
    }
    
    /** checkForWin: check board cell-by-cell for "does a win start here?" */

    checkForWin() {
      function _win(cells) {
        // Check four cells to see if they're all color of current player
        //  - cells: list of four (y, x) cells
        //  - returns true if all are legal coordinates & all match currPlayer

        return cells.every(
          ([y, x]) =>
            y >= 0 &&
            y < this.HEIGHT &&
            x >= 0 &&
            x < this.WIDTH &&
            this.board[y][x] === this.currPlayer
        );
      }

      for (let y = 0; y < this.HEIGHT; y++) {
        for (let x = 0; x < this.WIDTH; x++) {
          // get "check list" of 4 cells (starting here) for each of the different
          // ways to win
          const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
          const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
          const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
          const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

          // find winner (only checking each win-possibility as needed)
          if (_win.call(this, horiz) || _win.call(this, vert) || _win.call(this, diagDR) || _win.call(this, diagDL)) {
            return true;
          }
        }
      }
    }
    
    /** endGame: announce game end */

    endGame(msg) {
        alert(msg);
        this.GAME_OVER = true;
    }
}

newGame();
let startGame = document.querySelector("#start-game");

startGame.addEventListener("click", function(){
    newGame();
})

function newGame(){
    document.querySelector("#board").innerHTML = "";
    let game = new Game(7, 6);
    game.makeBoard();
    game.makeHtmlBoard();
}