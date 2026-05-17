/*  
    Shallow Copy 
        - A shallow copy copies only the top-level properties.
        - If there are nested objects/arrays, the references are copied, not the actual values.
*/

const obj1 = {
    name: "Nikhil",
    address: {
        city: "Delhi"
    }
};

const obj2 = { ...obj1 };

obj2.name = "Pabitra";
obj2.address.city = "Mumbai";  // both pointing to the SAME nested object in memory.

console.log(obj1.name); // Nikhil
console.log(obj1.address.city); // Mumbai ❌  




/*
    Deep Copy
    - A deep copy copies EVERYTHING recursively.
    - Nested objects/arrays get completely new memory references.
*/

const obj1 = {
    name: "Nikhil",
    address: {
        city: "Delhi"
    }
};

const obj2 = structuredClone(obj1);

obj2.address.city = "Mumbai";  // don't override . Different memory location.

console.log(obj1.address.city); // Delhi ✅


/*
    Interview One-Liner
        Shallow Copy
            - Copies top-level values, nested references remain shared.

        Deep Copy
            - Copies everything recursively into new memory locations.
*/