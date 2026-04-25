
fn main() {
    let s = String::from("Nikhil");
   println!("{}", is_longer(&s,10));
   println!("s: {}", s )
}

fn is_longer(s:&String, num:usize)->bool{
    if s.len() > num {
        return true;
    }else{
        return false;
    }
}
