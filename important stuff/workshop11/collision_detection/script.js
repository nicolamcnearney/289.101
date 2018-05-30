/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

// declaring the variales for the puck
var puck_x = 210;
var puck_y = 210;
var speed = 40;

var puck = document.getElementById('puck');

puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';

function logCoordinates () {
    console.log('x=' + puck_x + 'y=' + puck_y);
}

function checkCollision () {
    if (puck_x >= 250 && puck_x <= 350) {
        gap.style.backgroundColor = 'red';
    }
    else {
        gap.style.backgroundColor = 'white';
    }
}

// move left
document.getElementById('left').addEventListener('click', function () {
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
    
});
document.getElementById('right').addEventListener('click', function () {
    puck_x += speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
});

