class Cell {

    constructor(isMine, x, y, size) {
        this.mine = isMine;
        this.neighborCounter = neighbord;
        this.revealed = false;
        this.x = x;
        this.y = y;
        this.size = size;

    }

    show() {
        fill('white');
        rect(this.x, this.y, this.size);
        if (!this.mine) {
            let c = color('red');
            fill(c);
            ellipse((cellSize * 0.5) + (cellSize * x), (cellSize * 0.5) + (cellSize * y), cellSize * 0.6);
        }
        else {
            fill('black')
            text(this.neighborCounter, cellSize * 0.5 + (cellSize * x), (cellSize * 0.5) + (cellSize * y), cellSize);

        }
    }

}