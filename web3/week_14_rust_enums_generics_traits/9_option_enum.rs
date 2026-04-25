
fn find_first_a( word:String )-> Option<i32> {

    for (index, character) in word.chars().enumerate(){
        if character == 'a' {
            return Option::Some(index as i32);
        }
    }
    return None;
}


fn main(){
    let value = find_first_a(String::from("Krishna"));

    match value {
        Some(index) => {println!("first a was found at {}", index)},
        None => println!("couldn't find letter 'a' inside the string")
    }

}