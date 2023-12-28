// array functions 

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
]

console.log(iveMembers.push('신입')); // 7
console.log(iveMembers);

console.log(iveMembers.pop('신입')); // 신입
console.log(iveMembers);

 // 첫번쨰 원소 삭제 
console.log(iveMembers.shift());
console.log(iveMembers);

// 맨앞에 원소 삽입
console.log(iveMembers.unshift('안유진')); 
console.log(iveMembers);

// 1번 인덱스부터 시작하여 3개의 원소를 삭제
console.log(iveMembers.splice(1, 3)); // 삭제된 원소를 리턴
console.log(iveMembers);

///////////////////////////////////////////////////////////////////////////////////////////////

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
]

// push 와 유사 => 차이점 : 새로운 배열을 만들어서 리턴 (기존 배열을 변경하지 않는다!)
console.log(iveMembers.concat('신입'));
console.log(iveMembers);

// splice 와 유사 => 차이점 : 기존 배열에 영향 x
console.log(iveMembers.slice());
console.log(iveMembers);

// spread operator
let iveMembers2 = [
    ...iveMembers,
]

console.log(iveMembers2);
 
let iveMembers3 = [
    iveMembers,
]
console.log(iveMembers3);

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers === iveMembers4); // true


////////////////////////////////////////////////////////////////////////////////////////////////

// join()
console.log(iveMembers.join()); // 콤마 "," 를 기준으로 원소들을 합친다. 
console.log(iveMembers.join('/')); 
console.log(iveMembers.join(', ')); 

// sort() : 오름차순 정렬
iveMembers.sort();
console.log(iveMembers);
iveMembers.reverse();

let numbers = [
    1,
    9,
    7,
    3,
    5
];
console.log(numbers);

// a, b 를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환 
// 2) a를 b보다 먼저 정렬하려면 0보다 작은 숫자를 반환
// 3) 원래 숫자를 그대로 두려면 0을 반환 
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log();

numbers.sort((a, b) => {a > b ? -1 : 1});
console.log(numbers);

// map() : 배열에 있는 모든 값들을 순회하면서 그 각각의 값들을 변형시키는 역할을 수행
// => 기존 배열 변경 X 
console.log(iveMembers.map(x => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if(x === '안유진') {
        return `아이브: ${x}`;
    } else {
        return x;
    }
}));
console.log(iveMembers);

// filter()
numbers2 = [1,8,7,6,3]
console.log(numbers2.filter((x) => x % 2 === 0));

// find()
console.log(numbers2.find((x) => x % 2 === 0)); // 조건에 부합하는 원소들 중에 가장 앞의 원소를 리턴

// findIndex() => find() 다른점 : 인덱스를 리턴
console.log(numbers2.findIndex((x) => x % 2 == 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));

