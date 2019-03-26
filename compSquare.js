function square(n) {
  return n * n;
}

function ascSort(t) {
  return t.sort();
}

function compSquare(a, b) {
  const uniqA = ascSort(Array.from(new Set(a.map(square))));
  const uniqB = ascSort(Array.from(new Set(b)));
  return uniqA.reduce(
    (acc, current) => acc && uniqB.indexOf(current) !== -1,
    true
  );
}

// -----------------------------------------------------
//          TEST
// -----------------------------------------------------

function OK(msg = "") {
  console.log("OK pour : ", msg);
}

function KO(msg = "") {
  console.error("Erreur pour : ", msg);
}

function isEq(a, b, err) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    OK();
  } else {
    KO(err);
  }
}

isEq(
  compSquare(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  ),
  true
);
isEq(
  compSquare(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [132, 14641, 20736, 361, 25921, 361, 20736, 361]
  ),
  false
);
