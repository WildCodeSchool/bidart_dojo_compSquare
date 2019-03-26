const arrayA = [121, 144, 19, 161, 19, 144, 19, 11];
const arrayB = [122, 14641, 20736, 361, 25921, 361, 20736, 361];

// Code ------------------------------

function compSquare(a,b){
    if(a == null || b == null){
        return false;
    }
    a.sort((a,b) => a - b);
    b.sort((a, b) => a - b);
    return a.map((item) => item * item).every((item, index) => item == b[index]);
}
//tests -----------------------------

function areArgArrays() {
    if (Array.isArray(arrayA) && Array.isArray(arrayB)){
        console.log("Ce sont bien des arrays");   
    } else {
        console.log("Ce ne sont pas des arrays");   
    }
}
function isBool() {
    if (typeof compSquare() === "boolean"){
        console.log("Notre fonction est bien un boolean");    
    } else {
        console.log("Notre fonction n'est pas un boolean");      
    }
}
function shouldBeTrue(){
    if (compSquare([2, 6, 5, 10],[100, 4, 36, 25])){
        console.log("Test shouldBeTrue: OK"); 
    } else {
        console.log("Test shouldBeTrue: KO");   
    }
}
function shouldBeFalse() {
    if (compSquare([2, 6, 5, 7], [36, 4, 25])){
        console.log("Test shouldBeFalse: KO");   
    } else {
        console.log("Test shouldBeFalse: OK");
        
    }
}
function main(){
    isBool();
    areArgArrays();
    shouldBeTrue();
    shouldBeFalse();
}
main();