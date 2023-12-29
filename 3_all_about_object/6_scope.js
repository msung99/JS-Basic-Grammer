
var numberOne = 20;

//function levelOne() {
//    console.log(numberOne);
// }
// levelOne();

function levelOne() {
    var numberOne = 40;
    console.log(numberOne);
}
levelOne();

console.log(numberOne);

function levelOne() {
    var numberOne = 40;

    function levelTwo() {
        var numberTwo = 99;
        console.log(`levelTwo numberTwo : ${numberTwo}`);
        console.log(`levelTwo numberOne : ${numberOne}`);
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();
console.log(numberOne);
// console.log(numberTwo);

// Lexical Scope
// => 선언된 위치가 상위 스코프를 정한다.
// Dynamic Scope
// => 실행한 위치가 상위 스코프를 정한다. 

var numberThree = 3;

function functionOne() {
    var numberThree = 100;

    functionTwo();
}

function functionTwo() {
    console.log(numberThree); // global scope 내에서 변수값을 읽어온다.
}

functionOne();

// for문, if문, while문 등의 경우는 var 키워드를 쓸때 새로운 scope 를 만들어내지 않는다. 
var i = 999; 
 
for(var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope ${i}`);

i = 999;
for(let i=0; i<999; i++) { // 반면 var 가 아닌 let, const 키워드를 사용했을때는 우리가 예상한대로 새로운 스코프를 만들어낸다.
    console.log(i);
}
console.log(`i in global scope ${i}`);

// var 키워드는 함수 레벨 스코프만 만들어낸다.
// let, const 키워드는 함수 레벨 스코프의 블록 레벨 스코프를 만들어낸다.

