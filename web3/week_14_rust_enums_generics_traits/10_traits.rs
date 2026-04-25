use std::ops::Mul;

struct Rect <T> {
    width : T,
    height : T,
}

impl <T> Rect<T> where T : Mul<Output = T> + Copy, {

    fn area( &self)->T {
        return self.width * self.height;
    }
}

fn main(){
    
    let rect1:Rect<f32> = Rect {
        width : 2.0,
        height : 6.0
    };
    
    println!("{}", rect1.area());
}X