var xSize = 10;
var ySize = 10;
var cellSize = 30;
var board;
var neighbord = 0;
let revealed = true;
var lost = 0;
function createBoard() {
    board = new Array(ySize);
    for (let y = 0; y < ySize; y++) {
        board[y] = new Array(xSize);
        for (let x = 0; x < xSize; x++) {
            board[y][x] = new Cell(random(1) > 0.2, x * cellSize, y * cellSize, cellSize);
        }
    }
}
function counterNeighbors() {
    for (y = 0; y < ySize; y++) {
        for (x = 0; x < xSize; x++) {
            if (!board[y][x].mine) {
                if (x > 0 && board[y][x - 1].mine) {
                    board[y][x - 1].neighborCounter += (neighbord + 1);
                }
                if (x < (xSize - 1) && board[y][x + 1].mine) {
                    board[y][x + 1].neighborCounter += neighbord + 1;
                }
                if (y > 0 && board[y - 1][x].mine) {
                    board[y - 1][x].neighborCounter += neighbord + 1;
                }
                if (y < (ySize - 1) && board[y + 1][x].mine) {
                    board[y + 1][x].neighborCounter += neighbord + 1;
                }
                if (x > 0 && y > 0 && board[y - 1][x - 1].mine) {
                    board[y - 1][x - 1].neighborCounter += (neighbord + 1);
                }
                if (x > 0 && y < (ySize - 1) && board[y + 1][x - 1].mine) {
                    board[y + 1][x - 1].neighborCounter += (neighbord + 1);
                }
                if (x < (xSize - 1) && y < (ySize - 1) && board[y + 1][x + 1].mine) {
                    board[y + 1][x + 1].neighborCounter += (neighbord + 1);
                }
                if (x < (xSize - 1) && y > 0 && board[y - 1][x + 1].mine) {
                    board[y - 1][x + 1].neighborCounter += (neighbord + 1);
                }
            }
        }
    }
}
function mouseClicked() {
    if (this.mine = true) {
        for (y = 0; y < ySize; y++) {
            for (x = 0; x < xSize; x++) {
                if (lost < 1 && mouseX >= board[y][x].x && mouseX <= (board[y][x].x + cellSize) && mouseY >= board[y][x].y && mouseY <= (board[y][x].y + cellSize)) {
                    board[y][x].revealed = false;
                }
            }
        }
    }
}
function setup() {
    createCanvas(xSize * cellSize, ySize * cellSize);
    createBoard();
    counterNeighbors();
}
function draw() {
    for (y = 0; y < ySize; y++) {
        for (x = 0; x < xSize; x++) {
            board[y][x].show()
        }
    }
}
