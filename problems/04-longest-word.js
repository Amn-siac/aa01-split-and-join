/*
Write a function longestWord(sentence) that takes in a sentence string as an
argument. The function should return the longest word in the sentence. If there
is more than one "longest word", return the first of these instances.
*/

function longestWord(sentence) {
    sentence = sentence.split(' ');
    let index = 0;
    for (let i = 0; i < sentence.length - 1; i++) {
        if (sentence[i].length > sentence[i + 1].length) {
            index = i;
        }

    }
    return sentence[index];
}

// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // ''

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = longestWord;
