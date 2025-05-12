#include <iostream>
#include <string>
using namespace std;

class Dog {
public:
    // Constructor
    Dog(string name, int age) : name(name), age(age) {}

    // Method to make the dog bark
    void bark() {
        cout << "Woof! My name is " << name << endl;
    }

    // Method to get the dog's age
    int getAge() {
        return age;
    }

private:
    // Attributes
    string name;
    int age;
};

int main() {
    Dog dog1("Buddy", 3);
    Dog dog2("Bella", 5);

    // Call the bark method on each object
    dog1.bark(); // Output: Woof! My name is Buddy
    dog2.bark(); // Output: Woof! My name is Bella

    cout << dog1.getAge() << endl; // Output: 3
    cout << dog2.getAge() << endl; // Output: 5

    return 0;
}