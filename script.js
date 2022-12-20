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
let houseOne = document.getElementById('house-obstacle');

cnv.width = 1230;
cnv.height = 800;

// initialize globals
let background1X = 0;
let background2X = 1230;
let planeX = 90;
let planeY = 300;

// ARRAY OF OBSTACLES
let obstacle = [{ objectID: 'articuno', xStart: 1700, xEnd: 1780, yStart: 300, yEnd: 380 }, { objectID: 'moltres', xStart: 3500, xEnd: 3580, yStart: 550, yEnd: 630 }, { objectID: 'zapdos', xStart: 3000, xEnd: 3080, yStart: 400, yEnd: 420 }, { objectID: 'house1', xStart: 700, xEnd: 950, yStart: 430, yEnd: 650 }];

//event listener
btn.addEventListener('click', start);
document.addEventListener('keydown', planeMvmt);

function planeMvmt(e) {
    //W
    if (e.keyCode === 87) {
        planeY -= 5;
        //W
    } else if (e.keyCode === 83) {
        planeY += 5;
        //S
    } else if (e.keyCode === 65) {
        planeX -= 5;
        //A
    } else if (e.keyCode === 68) {
        planeX += 10;
        //D
    }
}

// background photo
function start() {
    //if nothing has been hit, then run normal game code
    if (detectCollision() === false) {
        // LOGIC
        background1X -= 2;
        if (background1X < -1230) {
            background1X = 1230;
        }
        background2X -= 2;
        if (background2X < -1230) {
            background2X = 1230;
        }

        //Moving Obstacles
        // pokemon/birds
        for (let i = 0; i < 3; i++) {
            if (obstacle[i].xStart > -80) {
                obstacle[i].xStart -= 5;
                obstacle[i].xEnd -= 5;
            } else {
                obstacle[i].xStart += 9000;
                obstacle[i].xEnd += 9000;
            }
        }

        // buildings
        // for (let i = 3; i < 3; i++) {
        if (obstacle[3].xStart > -250) {
            obstacle[3].xStart -= 2;
            obstacle[3].xEnd -= 2;
        } else {
            obstacle[3].xStart += 15000;
            obstacle[3].xEnd += 15000;
        }

        // DRAWING
        //background
        ctx.drawImage(img, background1X, 0, cnv.width, cnv.height);
        ctx.drawImage(img2, background2X, 0, cnv.width, cnv.height);

        //playable character
        ctx.drawImage(plane, planeX, planeY, 130, 80);

        //obstacles
        ctx.drawImage(articuno, obstacle[0].xStart, obstacle[0].yStart, 80, 80);
        ctx.drawImage(moltres, obstacle[1].xStart, obstacle[1].yStart, 80, 80);
        ctx.drawImage(zapdos, obstacle[2].xStart, obstacle[2].yStart, 80, 80);
        ctx.drawImage(houseOne, obstacle[3].xStart, obstacle[3].yStart, 250, 250);
        requestAnimationFrame(start);
    } else {
        console.log('hit');
    }
}


function detectCollision() {
    let planeYEnd = +planeY + 80;
    let planeXEnd = +planeX + 130;
    for (let i = 0; i < obstacle.length; i++) {
        // contact at right, contact at top, contact at left, contact at bottom
        //if left side of object meets right side of character OR (||)
        if (planeXEnd > obstacle[i].xStart) {
            return true;
        } else {
            return false;
        }
    }
}