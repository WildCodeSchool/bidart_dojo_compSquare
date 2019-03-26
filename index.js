const arrayA = [121, 144, 19, 161, 19, 144, 19, 11];
const arrayB = [122, 14641, 20736, 361, 25921, 361, 20736, 361];

function compSquare(a, b) {
   if (a == null || b == null) {
      return false;
   }
   a.sort((a, b) => a - b);
   b.sort((a, b) => a - b);
   return a.map(item => item * item).every((item, i) => item == b[i]);
}

// compSquare(arrayA, arrayB);

// Tests
function isBool() {
   if (typeof compSquare() === "boolean") {
      console.log("Test Boolean: ✔");
   } else {
      console.log("Test Boolean: ✘");
   }
}
function areArgArrays() {
   if (Array.isArray(arrayA) && Array.isArray(arrayB)) {
      console.log("Test Array : ✔");
   } else {
      console.log("Test Array : ✘");
   }
}
function isFunctional() {
   if (compSquare([2, 6, 5], [36, 4, 25])) {
      console.log("Function Testing : ✔");
   } else {
      console.log("Function Testing : ✘");
   }
}

function shouldBeFalse() {
   if (compSquare([2, 6, 5, 7], [36, 4, 25])) {
      console.log("Test return false :  ✘");
   } else {
      console.log("Test return false : ✔");
   }
}

function main() {
   isBool();
   areArgArrays();
   isFunctional();
   shouldBeFalse();
}

main();
