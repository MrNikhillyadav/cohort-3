
fn main() {
    println!("{}", mul_generic( 10, 20) );
    println!("{}", mul_generic( 10.0, 20.0) );
    println!("{}", mul_generic( -1, -2) );
    // println!("{}", mul_generic(20,"whatthefuck" )); // throws error as it's a string
}

fn mul_u32(a: u32, b: u32) -> u32 {
    return a * b;
}

fn mul_f64(a: f64, b: f64) -> f64 {
    return a * b;
}

// wouldn't it be great if there is a generic function for all these types like :

fn mul_generic <T:std::ops::Mul<Output = T>> (a : T, b : T) -> T {
    return  a * b;
}

