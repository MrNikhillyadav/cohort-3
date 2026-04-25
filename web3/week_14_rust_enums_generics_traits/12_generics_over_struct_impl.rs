
struct Rect<T> {
    width: T,
    height: T,
}

// Generic implementation with trait bound

impl<T> Rect<T>
where
    T: std::ops::Mul<Output = T> + Copy,
{
    fn area(&self) -> T {
        self.width * self.height
    }
}

fn main() {
    let r1: Rect<i32> = Rect {
        width: 20,
        height: 30,
    };

    let r2: Rect<f64> = Rect {
        width: 20.0,
        height: 30.0,
    };

    println!("Area r1: {}", r1.area());
    println!("Area r2: {}", r2.area());
}