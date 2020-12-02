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
        fill('black')
        rect(this.x, 1, this.size);
        fill('white')
        textSize(cellSize * 0.3);
        text('Kliknij (gdziekolwiek) dwukrotnie aby odświeżyć', cellSize, 10, this.size * cellSize);
        if (board[y][x].revealed === true && y !== 0) {
            fill('gray');
            rect(this.x, this.y, this.size);
        }
        else if (y !== 0) {
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