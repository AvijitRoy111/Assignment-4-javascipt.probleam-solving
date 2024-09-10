function deleteInvalids(arr) {
    if (!Array.isArray(arr)) {
        return "Error: Input must be an array";
    }

    const validNumbers = arr.filter(item => typeof item === 'number' && !isNaN(item));
    
    return validNumbers;
}

console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])); 
console.log(deleteInvalids(["1" , {num:2} , NaN ])); 
console.log(deleteInvalids([ 1 , 2 , -3 ])); 
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));    
