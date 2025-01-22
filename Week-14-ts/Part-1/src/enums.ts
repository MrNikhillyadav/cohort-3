enum Direction {
          Up = 'UP',
          Down = 'DOWN',
          Left = 'LEFT',
          Right = 'RIGHT',
}

function doSomething(keyPressed:Direction){
          // do something
          console.log(keyPressed, 'button pressed!')
}

doSomething(Direction.Down)



