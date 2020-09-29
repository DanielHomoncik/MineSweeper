class Cell {

    constructor(isMine, x, y, size) {
        this.mine = isMine;
        this.neighborCounter = 0;
        this.revealed = false;
        this.x = x;
        this.y = y;
        this.size = size;

    }

    // show() {
    //     fill('white');
    //     rect(this.x, this.y, this.size);
    //     if (this.mine === false) {
    //         let c = color('red');
    //         fill(c);
    //         ellipse((cellSize * 0.5) + (cellSize * x), (cellSize * 0.5) + (cellSize * y), cellSize, cellSize);
    //     }
    //     else {
    //         fill('black')
    //         text('1', cellSize * 0.5 + (cellSize * x), (cellSize * 0.5) + (cellSize * y), cellSize);

    //     }
    // }
    look() {

        fill('white');
        rect(this.x, this.y, this.size);
        if (this.mine === false) {
            let c = color('red');
            fill(c);
            ellipse((cellSize * 0.5) + (cellSize * x), (cellSize * 0.5) + (cellSize * y), cellSize, cellSize);
        }
        else {
            fill('black')
            text( Math.floor(Math.random() * 10), cellSize * 0.5 + (cellSize * x), (cellSize * 0.5) + (cellSize * y), cellSize);

        }
    }
    // TODO: 
    // If is mine - draw circle inside with red color;
    // If is not mine - write random number (0-9) -> will be used in the future for neightbour counter;
    // Remember, that it has to scale with this.size


}