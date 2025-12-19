function Outer(){
    var a = 10;
    console.log("a in outer:", a);
    
    function inner(){
        a += 5
        console.log("a in inner:", a);
    }
    return inner;
}

let addOne = Outer();
addOne();
addOne();

console.log("--------")

let addOne2 = Outer();
addOne2();




// we can add any num to private variable `a` in outside funciton using inner function 

function Outer(){
    var a = 10;
    
    function inner(num){
        a += num
        console.log(`a in inner, after adding ${num}:`, a);
    }
    return inner;
}

let add = Outer();
add(2);  // 12
add(3);  // 15

console.log("----------")

let add2 = Outer();
add2(1);  // 11
add2(7);  // 18


