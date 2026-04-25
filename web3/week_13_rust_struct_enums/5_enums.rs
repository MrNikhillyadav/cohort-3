#[derive(PartialEq)]

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}

fn main() {
    move_away(Direction::UP);
    move_away(Direction::DOWN);
}

fn move_away(direction: Direction) {
    if direction == Direction::UP {
        println!("moved in the up direction");
    } else if direction == Direction::DOWN {
        println!("moved in the down direction");
    } else if direction == Direction::LEFT {
        println!("moved in the left direction");
    } else if direction == Direction::RIGHT {
        println!("moved in the right direction");
    }
}
