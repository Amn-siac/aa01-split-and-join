/*
Write a function snakeToPascal that takes in a snake_cased string and returns a
PascalCased version of the string. snakecase is where each word is separated
with underscores (``). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.
*/

function snakeToPascal(str) {
    str = str.toLowerCase();
    str = str.split('_');
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].split('')[0].toUpperCase() + str[i].slice(1);
    }
    return str.join('');
}

// console.log(snakeToPascal('snakes_go_hiss')); // 'SnakesGoHiss'
// console.log(snakeToPascal('say_hello_world')); // 'SayHelloWorld'
// console.log(snakeToPascal('app_academy_is_cool')); // 'AppAcademyIsCool'
// console.log(snakeToPascal('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = snakeToPascal;
