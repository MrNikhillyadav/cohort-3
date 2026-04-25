#[derive(PartialEq)]

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}

//  Pattern matching syntax 
fn move_away(direction: Direction) {
    match direction {
        Direction::UP => print!("moved in the up direction"),
        Direction::DOWN => print!("moved in the down direction"),
        Direction::LEFT => print!("moved in the left direction"),
        Direction::RIGHT => print!("moved in the right direction"),
    }
}

fn main() {
    move_away(Direction::UP);
    move_away(Direction::DOWN);
}


// Note : 
//  - One thing to remember in pattern match syntax is that : "we don't use return keyword to return anything, rust handles it".