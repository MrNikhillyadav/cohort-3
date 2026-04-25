struct User {
    name: String,
    age: u32,
}

impl User {
    fn is_allowed_to_vote(&self, legal_age: u32) -> bool {
        if self.age >= legal_age {
            return true;
        }
        false
    }

    fn who_am_i() -> String {
        return String::from("User struct");
    }
}

fn main() {
    let user1: User = User {
        name: String::from("Harkirat"),
        age: 18,
    };

    let user2: User = User {
        name: String::from("Raman"),
        age: 13,
    };

    println!("{}", user1.is_allowed_to_vote(18));
    println!("{}", user2.is_allowed_to_vote(18));
    println!("static fn: {}", User::who_am_i()); // static fn calling
    println!("{}", user1.age);              // still works, as self in non-static fn are borrowed only like &self. 
}



/*  Points to Remember:
        - 1. if we are not passing self, means we are creating 'Static' functions.
        - 2. Non-static fun can only be called on struct name, not on instance.
*/