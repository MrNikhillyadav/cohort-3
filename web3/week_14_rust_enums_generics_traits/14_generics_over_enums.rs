
enum Shape<T> {
    Circle(T),        // radius
    Rect(T, T),       // width, height
    Square(T),        // side
}

impl Shape<f64> {
    fn get_area(&self) -> f64 {
        match self {
            Shape::Circle(r) => std::f64::consts::PI * r * r,
            Shape::Rect(w, h) => w * h,
            Shape::Square(s) => s * s,
        }
    }
}

fn main() {
    
    let r1: Shape<f64> = Shape::Rect(10.0, 5.0);
    let c1: Shape<f64> = Shape::Circle(3.0);
    let s1: Shape<f64> = Shape::Square(4.0);

    println!("Rect area: {}", r1.get_area());
    println!("Circle area: {}", c1.get_area());
    println!("Square area: {}", s1.get_area());
}