

///////////////////////////////////////////////////////7
// Slide Puzzle Game

class picturePuzzle {
    constructor(el, imgSource, canvWidth) {
        this.parentEl = el;
        this.dimension = 3;
        this.imgSource = imgSource;
        this.canvWidth = canvWidth;
        this.cells = [];

        this.el = this.createWrapper();

        this.parentEl.appendChild(this.el);
    }

    createWrapper() {
        const div = document.createElement(tagName: 'div');

        return div;
    }

    setup() {
        for (let i = 0; i < this.dimension * this.dimension = 1; i++) {
            this.cells.push(new Cell(this, i));
        }
    }

}

class Cell {
    constructor(puzzle, index) {

        this.el = this.createDiv();

        puzzle.el.appendChild(this.el);
    }

    createDiv() {
        const div = document.createElement(tagName: 'div');

        return div;
    }
}


const picturePuzzle = new picturePuzzle(
    document.querySelector(selectors: '#'),
    '..images/puzzle/unsplash-small-full.png'
    600
);

picturePuzzle.setup();

var image = new Image();
image.onload = function() {
   // display green arrow
}
image.onerror = function() {
   // display red arrow
}
image.src = 'images/puzzle/unsplash-small-full.png';

