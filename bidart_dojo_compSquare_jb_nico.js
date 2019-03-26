const a = [3];
const b = [3];

function compSquare(a, b) {

    let aSorted = function (a, b) { return a - b };
    let bSorted = function (a, b) { return a - b };
    // return [[aSorted], [bSorted]];
    let check = true;
    for (let i = 0; i < aSorted.length; i++) {
        if (aSorted[i] === bSorted[i]){
            return true;
        } else {
            return false;
        }
        
    }
    return check;
}


function isFunctional() {
    if (compSquare()) {
        console.log("OK");
    }
    else {
        console.log("not OK");
    }
}
function areArgArrays() {
    if (typeof a && typeof b) {
        console.log("Array");
    }
    else {
        console.log("not array");
    }
}
function isBool() {
    if (compSquare(true)) {
        console.log("True");
    }
    else {
        console.log("False");
    }
}
function main() {
    isBool()
    isFunctional()
    areArgArrays()
}

main()