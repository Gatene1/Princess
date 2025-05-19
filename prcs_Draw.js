// This javascript file handles all of the drawing functions, and houses the drawAll function that is called each
// frame from the window.onload statement in the beginning of the prcs.js file.

// Clears the canvas of any drawing.
function clearCanvas() {
    ctx.clearRect(0, 0, 800, 600);
}

// Draws a sprite from the parameter array of RGB values, starting at coordinates x, y.
function drawSprite(whichSprite, x, y) {
    let xAddend = 0;
    let yAddend = 0;
    for (pixelOn in whichSprite) {
        if (whichSprite[pixelOn] != 0) {
            drawSquare(x + xAddend + (xAddend * (PIXEL_SIZE - 1)), y + yAddend + (yAddend * (PIXEL_SIZE - 1)), PIXEL_SIZE, PIXEL_SIZE, whichSprite[pixelOn]);
        }
        if (xAddend + 1 >= GRID_SIZE) {
            xAddend = 0;
            yAddend += 1;
        } else {
            xAddend += 1;
        }
    }

}

// Draws a square, with the dimensions width & height, at the coordinates x, y, and fills in the square with the
// fillColor color.
function drawSquare(x, y, width, height, fillColor) {
    ctx.fillStyle = fillColor;
    ctx.fillRect(x, y, width, height);
}

// The function that is called each frame in the window.onLoad statement.
function drawAll() {
    clearCanvas();
    imbueLevelData();
    drawPlayer();
    drawPrincess();
    drawWalls();
}

function drawPlayer() {
    let heroFacingTemp;
    switch (playerStart.facing) {
        case "down" :
            heroFacingTemp = heroDown;
            break;
        case "up" :
            heroFacingTemp = heroUp;
            break;
        case "left" :
            heroFacingTemp = heroLeft;
            break;
        case "right" :
            heroFacingTemp = heroRight;
            break;
    }
    drawSprite(heroFacingTemp, (playerStart.x * GRID_SIZE) * PIXEL_SIZE, (playerStart.y * GRID_SIZE) * PIXEL_SIZE);
    heroFacingTemp = null;
}
function drawPrincess() {
    let princessFacingTemp;
    switch (princess.facing) {
        case "down" :
            princessFacingTemp = princessDown;
            break;
        case "up" :
            princessFacingTemp = princessUp;
            break;
        case "left" :
            princessFacingTemp = princessLeft;
            break;
        case "right" :
            princessFacingTemp = princessRight;
            break;
    }
    drawSprite(princessFacingTemp, (princess.x * GRID_SIZE) * PIXEL_SIZE, (princess.y * GRID_SIZE) * PIXEL_SIZE);
    princessFacingTemp = null;
}

function drawWalls() {
    for (let wall of walls) {
        drawSquare((wall.x * GRID_SIZE) * PIXEL_SIZE, (wall.y * GRID_SIZE) * PIXEL_SIZE,
            (wall.w * GRID_SIZE) * PIXEL_SIZE, (wall.h * GRID_SIZE) * PIXEL_SIZE, "#000000");
    }
}