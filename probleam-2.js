function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid";
    }
    
    const lastChar = name[name.length - 1].toLowerCase();
    const goodLetters = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    if (goodLetters.includes(lastChar)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

console.log(checkName("Salman"));  
console.log(checkName("Rafee")); 
console.log(checkName("Jhangkar")); 
console.log(checkName(199)); 
console.log(checkName(["rasedh"]));      
