
struct User {
    name : String,
    age : u32,
}

fn first_element_generic<T> (v : Vec<T>) -> T {
    return v.into_iter().nth(0).unwrap();
}

fn main() {

    let v: Vec<i32> = vec![10, 20, 30];
    let v2: Vec<String> = vec![ String::from("harkirat"), String::from("singh")];
    let v3: Vec<User> = vec![ User {name : String::from("nikhil"), age : 24},  User { name : String::from("krishna"), age : 44} ];

    println!("{}", first_element_generic(v));
    println!("{}", first_element_generic(v2));

    println!("{}", first_element_generic(v3).name);
}


