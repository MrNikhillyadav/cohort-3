/*
    3 Rules of Borrowing (CORE)

        Rule 1: You can have ANY number of immutable references (&T)
        Rule 2: You can have ONLY ONE mutable reference (&mut T)
        Rule 3 (MOST IMPORTANT): You cannot mix mutable and immutable references at the same time

*/

fn main() {
    //Case 1: Ownership MOVE issue
    let v = vec![1,2,3];

    for i in v {
        println!("{}", i);
    }
    println!("{:?}", v); // ERROR


    // Case 2: Borrow (SAFE & MOST USED)
    let v = vec![1,2,3];

    for i in &v {
        println!("{}", i);
    }
    println!("{:?}", v); //  works


    // Case 3: Mutable Borrow
    let mut v = vec![1,2,3];

    for i in &mut v { //&mut v → mutable borrow
        *i += 1;
    }
    println!("{:?}", v); // [2,3,4]



    
// -------------------------------------------------

    //Example : 
    
    let mut str = String::from("Harkirat");

    // Only immutable borrows
    let len = get_first(&str);
    let len2 = get_first(&str);
    let len3 = get_first(&str);

    println!("{}", len);
    println!("{}", len2);
    println!("{}", len3);

    // Mutable borrow AFTER immutable usage ends
    let s = &mut str;
    s.clear();

    println!("{}", str); // empty str
}

fn get_first(str: &String) -> char {
    str.chars().nth(0).unwrap()
}