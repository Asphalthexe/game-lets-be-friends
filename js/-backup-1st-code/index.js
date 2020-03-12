///////////////////////////////////////////////////////7
// Slide Puzzle Game

//import PicturePuzzle from './PicturePuzzle';

const picturePuzzle = new PicturePuzzle(
   document.getElementById('puzzle-wrapper'),
   'images/puzzle/unsplash-small-full.png',
   360
);


picturePuzzle.onSwap = function (movements) {
   console.log(movements);
};

const modal = document.getElementById('success-modal');
modal.style.display = 'block';

picturePuzzle.onFinished = function () {
   console.log("Show good job dialog");

   setTimeout(() => {
      modal.classList.add('open');
      this.el.classList.add('blur-it')
   }, 500);
   modal.querySelector('.trigger').onclick = () => {
      modal.classList.remove('open');
      this.el.classList.remove('blur-it');
   }
};





// TEST IMG URL
/*
var image = new Image();
image.onload = function() {
   // display green arrow
}
image.onerror = function() {
   // display red arrow
}
image.src = 'images/puzzle/unsplash-small-full.png';
*/