var xSize = 10;
var ySize = 10;
var cellSize = 30;
var board;

function exampleOfUsage() {
    createCanvas(500, 500);
    background(255, 204, 100);
    // fill(12,23,34);
    // rect(10, 10, 50, 120);
    fill('red');
    // rect(150, 180, 10, 60);

    ellipse(350, 250, 140, 80);
    text('Hello world', 20, 150);
}

function createBoard() {
    board = new Array(ySize);
    for (let y = 0; y < ySize; y++) {
        board[y] = new Array(xSize);
        for (let x = 0; x < xSize; x++) {
            board[y][x] = new Cell(random(1) < 0.5, x * cellSize, y * cellSize, cellSize);
        }
    }
}

function setup() {
    createCanvas(xSize * cellSize, ySize * cellSize);
    background(255, 204, 100);
    createBoard();
    for (y = 0; y < ySize; y++) {
        for (x = 0; x < xSize; x++) {
            board[y][x].look();
        }
    }
}

function draw() {
    for (y = 0; y < ySize; y++) {
        for (x = 0; x < xSize; x++) {
            board[y][x].show();
        }
    }
}
