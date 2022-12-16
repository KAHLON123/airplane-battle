// button element, canvas, and images
let btn = document.getElementById('start-btn');
let cnv = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let img = document.getElementById('background');
let img2 = document.getElementById('background-extension');
let plane = document.getElementById('playable-character');
//obstacle images
let articuno = document.getElementById('art-obstacle');
let moltres = document.getElementById('mol-obstacle');
let zapdos = document.getElementById('zap-obstacle');

cnv.width = 1230;
cnv.height = 800;

// initialize globals
let background1X = 0;
let background2X = 1230;
let planeX = 90;
let planeY = 300;

// ARRAY OF OBSTACLES
let obstacle = [{ objectID: 'articuno', xStart: 700, yStart: 300, yEnd: 320 }, { objectID: 'moltres', xStart: 700, yStart: 550, yEnd: 570 }, { objectID: 'zapdos', xStart: 700, yStart: 400, yEnd: 420 }];

//event listener
btn.addEventListener('click', start);
document.addEventListener('keydown', planeMvmt);

function planeMvmt(e) {
    //W
    if (e.keyCode === 87) {
        planeY += 5;
        //W
    } else if (e.keyCode === 83) {
        planeY -= 5;
        //S
    } else if (e.keyCode === 65) {
        planeX -= 5;
        //A
    } else if (e.keycode === 68) {
        planeX += 5;
        //D
    }
}

// background photo
function start() {
    // LOGIC
    background1X -= 2;
    if (background1X < -1230) {
        background1X = 1230;
    }
    background2X -= 2;
    if (background2X < -1230) {
        background2X = 1230;
    }

    //moving obstacles


    // DRAWING
    ctx.drawImage(img, background1X, 0, cnv.width, cnv.height);
    ctx.drawImage(img2, background2X, 0, cnv.width, cnv.height);
    ctx.drawImage(plane, planeX, planeY, 130, 80);
    ctx.drawImage(articuno, 700, obstacle[0].yStart, 80, 80);
    ctx.drawImage(moltres, 700, obstacle[1].yStart, 80, 80);
    ctx.drawImage(zapdos, 700, obstacle[2].yStart, 80, 80);
    requestAnimationFrame(start);
}

