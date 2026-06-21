// procedural macros ---- Debug macro

#[derive(Debug)]

struct Rect {
    width : u32,
    height : u32
}


fn main(){

    let r : Rect = Rect{
        width : 10,
        height : 20
    };

    println!("{:?}", r);
}