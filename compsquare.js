const a = [5, 3, 6];
const b = [25, 9, 36];
a.sort(function (x, y) {
    return x - y
});
b.sort(function (x, y) {
    return x - y
});

// const compSquare = (a,b) => a[0]**2 === b[0]
function compSquare(a, b) {
    for (let i = 0; i < 100; i++) {
        if (a[i] === Math.sqrt(b[i])) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
};
console.log(a, b);

console.log(compSquare());
