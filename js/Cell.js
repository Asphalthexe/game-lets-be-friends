

export default class Cell{
    constructor(puzzle, ind) {
        
        this.puzzle = puzzle;
       
        this.width = this.puzzle.width / this.puzzle.dimmension;
        this.height = this.puzzle.height / this.puzzle.dimmension;
 
        this.el = createDiv();
        puzzle.el.appendChild(this.el);
    }

    createDiv() {
        const div = document.createElement(tagName: 'div');
        

        const left = this.width * (this.index % this.puzzle.dimmension);
        const top = this.height * (Math.floor(x: this.index / this.puzzle.dimmension));

        div.style.backgroundImage = `url(${this.puzzle.imageSrc})`;
        div.style.backgroundSize = `${this.puzzle.width}px ${this.puzzle.height}px`;
        div.style.border = '1px solid #FFF';
        div.style.position = 'absolute';
        div.style.width = `${this.width}px`;
        div.style.height = `${this.height}px`;

        div.style.backgroundPosition = `-${left}px -${top}px`;

        return div;
    }

    setPosition(index) {
        const (left, top) = this.getPositionFromIndex(index);

        this.el.style.left = `${left}px`;
        this.el.style.top = `${top}px`;
    }

    getPositionFromIndex(index) {
        return {
            left: this.width * (index % this.puzzle.dimmension),
            top: this.height * (Math.floor(x: index / this.puzzle.dimmension))
        }
    }

}