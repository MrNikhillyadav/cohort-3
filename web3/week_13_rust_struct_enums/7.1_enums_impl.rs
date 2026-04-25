
enum Shape {
    Circle(f64),                  // radius
    Rectangle { w: f64, h: f64 }, // width, height
}

impl Shape {
    fn area(&self) -> f64 {
        match self {
            Shape::Circle(r) => 3.14 * r * r,
            Shape::Rectangle { w, h } => w * h,
        }
    }

    fn describe(&self) {
        match self {
            Shape::Circle(r) => println!("Circle with radius {}", r),
            Shape::Rectangle { w, h } => {
                println!("Rectangle with width {} and height {}", w, h)
            }
        }
    }
}

fn main() {
    let c = Shape::Circle(5.0);
    let r = Shape::Rectangle { w: 4.0, h: 6.0 };

    c.describe();
    println!("Area: {}", c.area());

    r.describe();
    println!("Area: {}", r.area());
}