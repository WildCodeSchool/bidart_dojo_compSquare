const array1 = [121, 144, 19, 161, 19, 144, 19, 11];
const array2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

function compSquare(a, b) {
    const aNew = a.sort(function(x, z) {
        return x - z;
    });
    const bNew = b.sort(function(x, z) {
        return x - z;
    });
    // console.log(bNew);
    const aNew2 = aNew.map(function(carre) {
        return carre * carre;
    });
    // console.log(aNew2);
    let count = 0;
    for (let i = 0; i < aNew2.length; i++) {
        if (aNew2[i] === bNew[i]) {
            count += 1;
        }
    }
    if (count === bNew.length && count === aNew2.length) {
        return true;
    } else {
        return false;
    }
}
console.log(compSquare(array1, array2));

module.exports = compSquare;
