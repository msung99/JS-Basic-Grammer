
function calculate(a, b) {
    return a + b;
}
console.log(calculate(1, 2));

// arrow 함수
const multiply2 = (x, y) => {
    return x * y; 
}
console.log(multiply2(1,2));

const multiply3 = (x, y) => x * y;
console.log(multiply3(3,4));

function multiply6(x) {
    return function(y) {
        return function(z) {
            return 'x: ${x} ${y} ${z}';
        }
    }
}
console.log(multiply6(5)(2)(6));


const multiplyTwo = function(x, y) {
    return x * y;
}
console.log(multiplyTwo(2, 3));


const multiplyThree = function(x, y, z) {
    console.log(arguments);
    return x * y * z;
}

const multiplyAll = function(...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1); // arguments 안에 있는 모든값들을 곱함
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10, 11));


