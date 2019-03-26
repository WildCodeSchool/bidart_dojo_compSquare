const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

function compSquare(a, b) {
    const aSorted = a.sort(function(x, y){return x-y});
    const bSorted = b.sort(function(x, y){return x-y});
    let check = true;
    for (let i = 0; i < a.length; i++) {
        if (aSorted[i] * aSorted[i] !== bSorted[i]) {
            check = false }
        }
    return check;
    }

console.log(compSquare(a, b))

// // begin of tests


function isFunctional() {
    if (compSquare(a, b)) {
    console.log("OK, compSquare is funktional!");
    }
    else {
    console.log("Ahh! compsquare is not funktional!");
    }
}


function argsArrays(arg1, arg2) {
    if (arg1.constructor === Array && arg2.constructor === Array){
        console.log('OK, args are arrays!')
    } else {
        console.log('Mmh, args aren\'t arrays!')
    }
}


function isBool() {
    if (typeof compSquare(a, b) === "boolean") {
        console.log('OK, compSquare is BOOL!');
    } else {
        console.log('Mmh, compSquare znot BOOL dude');
        }
}

isFunctional();
isBool();
argsArrays(a, b);
