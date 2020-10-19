class Cell {

    constructor(isMine, x, y, size) {
        this.mine = isMine;
        this.neighborCounter = neighbord;
        this.revealed = revealed;
        this.x = x;
        this.y = y;
        this.size = size;
        this.lost = lost;
    }

    
    show() {
        fill('grey')
        text('refres', cellSize * 0.5 + (cellSize * x), (cellSize * 0.5) + (cellSize * y), cellSize);
        
        if (board[y][x].revealed === true) {
            fill('gray');
            rect(this.x, this.y, this.size);
        }
        else {
            fill('blue');
            rect(this.x, this.y, this.size);

            if (!this.mine) {
                let c = color('red');
                fill(c);
                ellipse((cellSize * 0.5) + (cellSize * x), (cellSize * 0.5) + (cellSize * y), cellSize * 0.6);
                lost++;
            }
            else {
                fill('black')
                text(this.neighborCounter, cellSize * 0.5 + (cellSize * x), (cellSize * 0.5) + (cellSize * y), cellSize);
            }
        }
    }
}