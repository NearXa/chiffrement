function Ceasar(word, offset) {
    let newArray = [];
    for (let i = 0; i < word.length; i++) {
        if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
            newArray.push((((word.charCodeAt(i) - 65) + offset) % 26) + 65);
        }
        else {
            newArray.push((((word.charCodeAt(i) - 97) + offset) % 26) + 97);
        }
    }
    let newWords = "";
    for (let j = 0; j < newArray.length; j++) {
        newWords += String.fromCharCode(newArray[j])
    }
    return newWords;
}
console.log(Ceasar("Salam", 3)) 
