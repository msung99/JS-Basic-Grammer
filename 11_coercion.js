// 타입 변환
// 1) 명시적 2) 암시적

let age = 32;
let strAge = age.toString(); // 명시적 형변환
console.log(typeof strAge); // string 

let test = age + ' ';
console.log(typeof test); // string 

console.log('98' + 2); // 982
console.log('98' - 2); // 96 => string 에는 빼기 연산이 없으니깐 98 이 숫자로 변하면서 연산이 진행된다.


/////////

console.log(typeof (98).toString());
console.log(typeof (true).toString());

// 숫자 타입으로 변환하기
console.log(parseInt("123"), parseInt("0.99")); // 123 0 
console.log(parseFloat("123.123")); // 123.123


