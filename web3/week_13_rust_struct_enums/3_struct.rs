
#[derive(Debug)] // macros

struct Address {
    city : String,
    country : String,
    pincode : String
}

#[derive(Debug)] // macros

struct User {
    name : String,
    age : u32,
    addresses : Vec<Address>
}

fn main(){
    let user1 : User = User {
        name : String::from("Nikhil"),
        age : 24,
        addresses:vec![
            Address {
                city : String::from("New D)elhi"),
                country : String::from("India"),
                pincode : String::from("110043")
            }
        ]
    };


    println!("{}", is_allowed_to_vote(&user1));
    println!("{:?}", user1.age); 

    //we will learn this soon in macros
    println!("{:?}", user1); 
}

fn is_allowed_to_vote(user:&User)->bool{
    if user.age >= 18 {
        return true;
    }
    return false;
}