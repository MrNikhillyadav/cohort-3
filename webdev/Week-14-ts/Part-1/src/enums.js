"use strict";
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    // do something
    console.log(keyPressed, 'button pressed!');
}
doSomething(Direction.Down);
