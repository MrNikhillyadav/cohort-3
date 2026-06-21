// procedural macros ---- Debug & PartialEq macro

#[derive(Debug,PartialEq)]

struct Rect {
    width : u32,
    height : u32,
    side : u32
}


fn main(){

    let r : Rect = Rect{
        width : 10,
        height : 20,
        side : 4
    };

    let r2 : Rect = Rect{
        width : 20,
        height : 20,
        side : 4
    };

    if r == r2 {
        println!("they are equal")
    }
    else{
        println!("they are not equal")
    }

    println!("{:?}", r);
}