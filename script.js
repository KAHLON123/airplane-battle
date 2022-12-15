// button element, canvas, and images
let btn = document.getElementById('start-btn');
let cnv = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let img = document.getElementById('background');
let img2 = document.getElementById('background-extension');

cnv.width = 1230;
cnv.height = 800;

let background1X = 0;
let background2X = 1230;

//event listener
btn.addEventListener('click', submitBtnClicked);

// background photo
requestAnimationFrame(backgroundMvmt);
function backgroundMvmt() {
    // LOGIC
    background1X -= 5;
    if (background1X < -1000) {
        background1X = 1000;
    }
    background2X -= 5;
    if (background2X < -1000) {
        background2X = 1000;
    }

    // DRAWING
    ctx.drawImage(img, background1X, 0, cnv.width, cnv.height);
    ctx.drawImage(img2, background2X, 0, cnv.width, cnv.height);
    requestAnimationFrame(backgroundMvmt);
}

function submitBtnClicked() {

}