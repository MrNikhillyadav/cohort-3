
export function pad(num : number){
    let numDigits = num == 0 ? 1 : 0;
    let numTemp = num;
    while(numTemp != 0){
        numTemp /= 10;
        numTemp = Math.floor(numTemp);
        numDigits++;
    }
    let ans = "";

    for( let i =0; i < 6- numDigits; i++){
        ans += "0";
    }
    ans += num;
    return ans;
}