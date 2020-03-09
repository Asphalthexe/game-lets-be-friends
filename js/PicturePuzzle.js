import Cell from "Cell.js";

export default class PicturePuzzle {
    constructor(el, imageSrc, canvasWidth) {
        this.parentEl = el;
        this.dimension = 3;
        this.imageSrc = imageSrc;
        this.canvasWidth = canvasWidth;
        this.cells = [];

        this.init();

        const img = new Image();
        img.onload = () => {
            console.log(img.width, img.height);

            this.height = img.height * this.width / img.width;
            this.el.style.width = `${this.width}px`;
            this.el.style.height = `${this.height}px`


            this.setup();

        };

        img.src = this.imageSrc;

    }

    init() {
        this.el = this.createWrapper();
        this.parentEl.appendChild(this.el);
    }

    createWrapper() {
        const div = document.createElement(tagName: 'div');
        div.style.position = 'relative';
        div.style.margin = '0 auto';
        return div;
    }

    setup() {


        for (let i = 0; i < this.dimension * this.dimension - 1; i++) {
            this.cells.push(new Cell(this, i));
        }
    this.shuffle();
    }

    shuffle() {
        for (let i = this.cells.length - 1; i > 0; i--) {
            const j = Math.floor(x: Math.random() * (i + 1));
            [this.cells[i], this.cells[j]] = [this.cells[j], this.cells[i]];
            this.cells[i].setPosition(i);
            this.cells[j].setPosition(j);
        }
    }

}