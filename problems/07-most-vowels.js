/*
Write a function mostVowels that takes in a sentence string and returns the
word of the sentence that contains the most vowels.
Vowels are the letters "a", "e", "i", "o", "u".
*/

function mostVowels(sentence) {
    let vowels = 'aeiou';
    let words = sentence.split(' ');
    let testArr = [];
    for (let i = 0; i < words.length; i++) {
        let count = 0;
        for (let k = 0; k < words[i].length; k++) {
            if (vowels.includes(words[i][k])) {
                count++
            }
        }
        testArr[testArr.length] = count;
    }
    let temp = testArr[0];
    for (let i = 0; i < testArr.length; i++) {
        if (temp < testArr[i]) {
            temp = i;
        }
    }
    return words[temp];
}

// console.log(mostVowels("what a wonderful life")); // "wonderful"
// console.log(mostVowels("the quick brown fox jumps")); // "quick"
// console.log(mostVowels("")); // ""

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = mostVowels;
