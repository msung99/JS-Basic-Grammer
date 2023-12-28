// copy by value : 값에 의한 전달 
// copy by reference : 참조에 의한 전달

// 1) 기본적으로 모든 Primitive 값은 copy by value 이다.
// 2) 객체는 copy by reference 이다.

// 1) 원시타입의 copy by value
let originalVal = '안녕하세요';
let cloneVal = originalVal;

cloneVal += ' 안유진 입니다.';
console.log(originalVal); // 안녕하세요 
console.log(cloneVal); // 안녕하세요 안유진 입니다.


// 2) 객체의 call by reference 
let originalObj = {
    name: '안유진',
    group: '아이브',
} 

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

originalObj['group'] = 'new group';
console.log(originalObj); // { name: '안유진', group: 'new group' }
console.log(cloneObj); //{ name: '안유진', group: 'new group' }
console.log(originalObj === cloneObj); // true 

let yujin = {
    name: '안유진',
    group: '아이브',
} 

// spread operator 를 사용하는 경우, copy by value 로 수행된다.
const yujin2 = {
    ...yujin,
}
console.log(yujin === yujin2); // false