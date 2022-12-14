// setInterval(moveBackground, 500);
// function moveBackground() {

// }

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let img = document.getElementById('background');
ctx.drawImage(img, 10, 10);