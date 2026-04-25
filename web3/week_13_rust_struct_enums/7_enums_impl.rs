
#[derive(PartialEq)]

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}

impl Direction {
    fn move_dir(&self) {
        match self {
            Direction::UP => println!("moved in the up direction"),
            Direction::DOWN => println!("moved in the down direction"),
            Direction::LEFT => println!("moved in the left direction"),
            Direction::RIGHT => println!("moved in the right direction"),
        }
    }
}

fn main() {
    let d1 = Direction::UP;
    let d2 = Direction::LEFT;

    d1.move_dir();
    d2.move_dir();
}