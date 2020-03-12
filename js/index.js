///////////////////////////////////////////////////////7
// Slide Puzzle Game

document.getElementById('startPuzzle').onclick = () => {
   shuffle();
};

/*   

write function time counter
win function -> check if every tile is in correct order -> then win
loose, if counter had no time anymore
////


let canvas = document.getElementById('puzzlecanvas')
   let ctx = canvas.getContext('2d')

   let frameCounter = 0
   let gameRunning = true



   let draw = () => {
      frameCounter++

      ctx.drawImage(road, 0, 0, canvas.width, canvas.height)
      ctx.drawImage(car.img, car.x, 550, 50, 100)

      if (car.x <= -2 || car.x >= 460) {
         gameRunning = false
      }

      // drawing some helper output to see how many re-renders the canvas did
      ctx.font = '30px Tahoma'
      ctx.fillStyle = 'green'
      ctx.fillText(`frame counter : ${frameCounter}`, 0, 50)
      if (gameRunning) {
         window.requestAnimationFrame(draw);
      } else {
         alert('GAME OVER')
      }
      window.requestAnimationFrame(draw)
   }

   function startGame() {
      draw()
   }

 */



function swapTiles(cell1, cell2) {
   var temp = document.getElementById(cell1).className;
   document.getElementById(cell1).className = document.getElementById(cell2).className;
   document.getElementById(cell2).className = temp;
}

function shuffle() {
   //Use nested loops to access each cell of the 3x3 grid
   for (var row = 1; row <= 3; row++) { //For each row of the 3x3 grid
      for (var column = 1; column <= 3; column++) { //For each column in this row

         var row2 = Math.floor(Math.random() * 3 + 1); //Pick a random row from 1 to 3
         var column2 = Math.floor(Math.random() * 3 + 1); //Pick a random column from 1 to 3

         swapTiles("cell" + row + column, "cell" + row2 + column2); //Swap the look & feel of both cells
      }
   }
}

function clickTile(row, column) {
   var cell = document.getElementById("cell" + row + column);
   var tile = cell.className;
   if (tile != "tile9") {
      //Checking if white tile on the right
      if (column < 3) {
         if (document.getElementById("cell" + row + (column + 1)).className == "tile9") {
            swapTiles("cell" + row + column, "cell" + row + (column + 1));
            return;
         }
      }
      //Checking if white tile on the left
      if (column > 1) {
         if (document.getElementById("cell" + row + (column - 1)).className == "tile9") {
            swapTiles("cell" + row + column, "cell" + row + (column - 1));
            return;
         }
      }
      //Checking if white tile is above
      if (row > 1) {
         if (document.getElementById("cell" + (row - 1) + column).className == "tile9") {
            swapTiles("cell" + row + column, "cell" + (row - 1) + column);
            return;
         }
      }
      //Checking if white tile is below
      if (row < 3) {
         if (document.getElementById("cell" + (row + 1) + column).className == "tile9") {
            swapTiles("cell" + row + column, "cell" + (row + 1) + column);
            return;
         }
      }
   }


}