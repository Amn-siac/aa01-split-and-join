/*
Write a function shortestWord that accepts a sentence as an argument. The
function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.
*/

function shortestWord(sentence) {
    let words = sentence.split(' ');
    let shortest = words[0];
    for (let i = 0; i < words.length; i++) {
        if (shortest.length >= words[i].length) {
            shortest = words[i];
        }
    }
    return shortest;
}
// console.log(shortestWord('what a wonderful life'));     // 'a'
// console.log(shortestWord('the quick brown fox jumps')); // 'fox'
// console.log(shortestWord('do what you enjoy'));         // 'do'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = shortestWord;
