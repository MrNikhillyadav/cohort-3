let arr = [2,14,12,8, 3,31]

let res = arr.map((x) => x*2);
console.log(res)

console.log(arr.filter((x) => x % 2 != 0))

arr.forEach((x,idx) => console.log(x+1));

for(let index in arr) {  // for in ---> returns index
    console.log(arr[index]) 
}



