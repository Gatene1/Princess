const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const FRAMES_PER_SECOND = 30;

const GRID_SIZE = 16;
const PIXEL_SIZE = 4;

let levelNumber = 0;
let levelOn, levelName, playerStart, princess, walls;
let levelInfo = {};

let canvas, ctx
let tryCanvasX = 50;
let tryCanvasY = 20;

window.onload = function() {
    canvas = document.getElementById("princessGame");
    ctx = canvas.getContext('2d');

    setInterval(drawAll, 1000 / FRAMES_PER_SECOND);


}