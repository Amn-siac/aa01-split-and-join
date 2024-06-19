/*
Write a function initials(name) that accepts a full name as an arg. The function
should return the initials for that name.
*/

function initials(name) {
    name = name.split(' ');
    let arr = [];
    for (let i = 0; i < name.length; i++) {
        arr.push(name[i][0])
    }
    return arr.join('').toUpperCase()
}


// console.log(initials('anna paschall')); // 'AP'
// console.log(initials('Mary La Grange')); // 'MLG'
// console.log(initials('brian crawford scott')); // 'BCS'
// console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = initials;
