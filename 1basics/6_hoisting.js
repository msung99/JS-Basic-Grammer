/*
* Hoisting 이란 무엇인가?
=> 모든 변수 선언문이 코드 최상단으로 이동되는 것처럼 느껴지는 현상
=> var 키워드의 경우 let, const 와 달리 Hoisting 현상을 막아주지 못한다.
   반대로 let, const 는 변수를 선언하고나서 초기화되기 전에 값을 미리 가져오는 버그를 막을 수 있다.
*/ 

console.log(name1); // undefined => 값을 미리 가져옴
var name1 = "코드팩토리";
console.log(name1);


var name2;
console.log(name2); // undefined
name2 = "코드팩토리";
console.log(name2);


console.log(name3); // 에러 발생
let name3 = '안유진';
