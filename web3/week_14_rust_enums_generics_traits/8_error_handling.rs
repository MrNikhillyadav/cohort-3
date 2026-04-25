use std::fs;

fn main() {
    let greeting_file_result = fs::read_to_string("hello.txt");

    // print!("{}", greeting_file_result.unwrap());    // panics if null
    // print!("{}", greeting_file_result.unwrap_or("No such file exist"));   // shows error message if Null

    match greeting_file_result {
        Ok(file_content) => {
            println!("File read successfully: {:?}", file_content);
        }
        Err(e) => {
            println!("Failed to read file: {:?}", e);
        }
    }
}

/*
    Clean Cheat Sheet
        Want to handle manually?
        → match

        Want automatic propagation?
        → ?

        Want quick unsafe?
        → unwrap()
*/