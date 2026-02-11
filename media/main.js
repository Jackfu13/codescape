import { drawIsoGrid, drawIsoBuilding } from "./renderer.js";

const canvas = document.getElementById("cityCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const TILE_L = 50
const offsetX = canvas.width/2
const offsetY = 100;

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawIsoGrid(ctx, 10, 10, TILE_L, offsetX, offsetY);

    // test buildings
    placeIsoBuilding(7, 5, 4);
    placeIsoBuilding(4, 8, 6);
}

// building placement function
function placeIsoBuilding(col, row, floors){
    var isoX = (col - row) * TILE_L / 2 + offsetX;
    var isoY = (col + row) * TILE_L / 4 + offsetY;

    drawIsoBuilding(ctx, isoX, isoY + TILE_L / 2, floors, TILE_L, "#598BAF");
}

// actual rendering
render();