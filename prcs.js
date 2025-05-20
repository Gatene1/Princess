const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const FRAMES_PER_SECOND = 30;

const GRID_SIZE = 16;
const PIXEL_SIZE = 4;
const SCREEN_WIDTH_MAX = 12;
const SCREEN_HEIGHT_MAX = 9;

let levelNumber = 0;
let levelOn, levelName, playerStart, princess, walls;
let phaseEnum = 1;

let canvas, ctx
let tryCanvasX = 50;
let tryCanvasY = 20;

let blinkDistance = 3;
let gameScreenWidth = 10;
let gameScreenHeight = 8;

window.onload = function() {
    canvas = document.getElementById("princessGame");
    ctx = canvas.getContext('2d');

    setInterval(drawAll, 1000 / FRAMES_PER_SECOND);


}