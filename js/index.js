////////////////////////////////////////////////////////
// Console Text field

let i = 0;
let txt = 'Lorem ipsum typing effect!'; /* The text */
let speed = 40; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
   if (i < txt.length) {
      document.getElementById("console").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
   }
}



///////////////////////////////////////////////////////7
// Slide Puzzle Game

document.getElementById('startPuzzle').onclick = () => {
   shuffle();
   checkWin();
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



// Check row 3 + 2 + 1, if every tile is on the correct spot (cell)
let cell11 = document.getElementById("cell11")
let cell12 = document.getElementById("cell12")
let cell13 = document.getElementById("cell13")
let cell21 = document.getElementById("cell21")
let cell22 = document.getElementById("cell22")
let cell23 = document.getElementById("cell23")
let cell31 = document.getElementById("cell31")
let cell32 = document.getElementById("cell32")
let cell33 = document.getElementById("cell33")


let tile1 = document.getElementsByClassName(".tile1")
let tile2 = document.getElementsByClassName(".tile2")
let tile3 = document.getElementsByClassName(".tile3")
let tile4 = document.getElementsByClassName(".tile4")
let tile5 = document.getElementsByClassName(".tile5")
let tile6 = document.getElementsByClassName(".tile6")
let tile7 = document.getElementsByClassName(".tile7")
let tile8 = document.getElementsByClassName(".tile8")
let tile9 = document.getElementsByClassName(".tile9")


function checkWin() {

   function correctPlace() {
      if (cell33.classList.contains("tile9") === true &&
         cell32.classList.contains("tile8") === true &&
         cell31.classList.contains("tile7") === true &&
         cell23.classList.contains("tile6") === true &&
         cell22.classList.contains("tile5") === true &&
         cell21.classList.contains("tile4") === true &&
         cell13.classList.contains("tile3") === true &&
         cell12.classList.contains("tile2") === true &&
         cell11.classList.contains("tile1") === true) {
         console.log("everything in spot")
         return true
      } else {
         return false
         console.log("something is not correct")
      }
   }

   if (correctPlace() === true) {
      console.log("Won Game")
      // return winGame()
   } else {
      return correctPlace()
   }
   //need a for loop for checking
}


/* 
// method for correct Place
function correctPlace(cell, tile) {
   if (cell.classList.contains("tile") === true) {
      return true
      console.log("is in spot")
   } else {
      return false
      console.log("is not")
   }
} */





function swapTiles(cell1, cell2) {
   let temp = document.getElementById(cell1).className;
   document.getElementById(cell1).className = document.getElementById(cell2).className;
   document.getElementById(cell2).className = temp;
}

function shuffle() {
   //Use nested loops to access each cell of the 3x3 grid
   for (let row = 1; row <= 3; row++) { //For each row of the 3x3 grid
      for (let column = 1; column <= 3; column++) { //For each column in this row

         let row2 = Math.floor(Math.random() * 3 + 1); //Pick a random row from 1 to 3
         let column2 = Math.floor(Math.random() * 3 + 1); //Pick a random column from 1 to 3

         swapTiles("cell" + row + column, "cell" + row2 + column2); //Swap the look & feel of both cells
      }
   }
}

function clickTile(row, column) {
   let cell = document.getElementById("cell" + row + column);
   let tile = cell.className;
   if (tile != "tile9") {
      //Checking if empty tile on the right
      if (column < 3) {
         if (document.getElementById("cell" + row + (column + 1)).className == "tile9") {
            swapTiles("cell" + row + column, "cell" + row + (column + 1));
            return;
         }
      }
      //Checking if empty tile on the left
      if (column > 1) {
         if (document.getElementById("cell" + row + (column - 1)).className == "tile9") {
            swapTiles("cell" + row + column, "cell" + row + (column - 1));
            return;
         }
      }
      //Checking if empty tile is above
      if (row > 1) {
         if (document.getElementById("cell" + (row - 1) + column).className == "tile9") {
            swapTiles("cell" + row + column, "cell" + (row - 1) + column);
            return;
         }
      }
      //Checking if empty tile is below
      if (row < 3) {
         if (document.getElementById("cell" + (row + 1) + column).className == "tile9") {
            swapTiles("cell" + row + column, "cell" + (row + 1) + column);
            return;
         }
      }
   }


}