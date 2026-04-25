
struct Rect<T> {
    width: T,
    height: T,
}

fn get_area<T :std::ops::Mul<Output = T>> (v: Rect<T>) -> T {
    return v.width * v.height;
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

    println!("Area r1: {}", get_area(r1));
    println!("Area r2: {}", get_area(r2));
}