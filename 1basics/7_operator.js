
console.log(1+2);
console.log(10 / 10); // 1
console.log(10 % 3); // 1

console.log('-----------')

console.log(10 * (10+10));

let number = 1;
number++;
number--;
console.log(number);


let sample = '99';
console.log(typeof +sample); // + : 문자열을 숫자 타입으로 "임시" 변환 
console.log(typeof sample); // 문자열 타입

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample); // boolean 타입을 숫자로 변경시, false 의 경우 0으로 변환 
console.log(typeof +sample) 

sample = '안유진'
console.log(+sample); // NaN (Not a Number)

sample = 99;
console.log(-sample); // -99 출력 (숫자 타입)


// 할당 연산자
number = 100;
number += 10;
number /= 4;
console.log(number);


// 비교 연산자
// 1) 값의 비교 (타입은 비교하지 않는다.)
// 2) 값과 타입의 비교 

console.log(5 == '5'); // 타입을 비교하지 않기 때문에, "true" 출력
console.log(0 == ''); // true
console.log(true == 1) // true


console.log(5 === '5') // false => 타입도 비교
console.log(5 !== '5') 

// 대소 관계 비교 연산자
console.log(100 > 1);
console.log(100 >= 1);


// 논리 연산자
console.log(1 > 1 && 10 <= 1);
console.log(1 || 1);


// 단축 평가(short circuit evalution)
// && 를 사용했을 때 좌측이 true 라면 우측 값 반환
// && 를 사용했을 떄 좌측이 false 라면 좌측 값 반환
// || 를 사용했을 때 좌측이 true 라면 좌측 값 반환
// || 를 사용했을 떄 좌측이 false 라면 우측 값 반환

console,log(true && '아이브'); // 아이브
console.log(false && '아이브'); // false 
console.log(true || '아이브'); // true  
console.log(false || '아이브'); // 아이브

console.log(true && true && '아이브'); // 아이브
console.log(true && false && '아이브'); // false

// 지수 연산자 
console.log(10**3); // 1000

// null 연산자
let name;
console.log(name);

name = name ?? '안녕하세요'; //  Null 이거나 undefined 일때 "안녕하세요" 를 리턴
console.log(name); // 안녕하세요 


