#include <iostream>
#include <string>
using namespace std;

class Dog {
    private:
        // Attributes
        string name;
        int age;

    public:
        // Constructor
        // best practice : use initialization list
        Dog( string name, int age) : name(name), age(age) {}
        // other way :
        // Dog(string PersonName, int PersonAge){
        //     name = PersonName;
        //     age = PersonAge;
        // } 

        void bark() {
            cout << "Woof! My name is " << name << endl;
        }

        int getAge() {
            return age;
        }

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