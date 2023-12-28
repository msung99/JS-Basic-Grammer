
// object : key-value 쌍

let yujin = {
    name: '안유진',
    group: '아이브',
    dance: function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

console.log(yujin);
console.log(yujin.dance());

console.log(yujin.name);
console.log(yujin['name']);
console.log(yujin.dance);

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yujin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,

    dance: function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}
console.log(yujin2);
console.log(yujin2.dance());

yujin2['group'] = '이민성 그룹';
console.log(yujin2);

yujin2['englishName'] = 'yujin';
console.log(yujin2);

delete yujin2['englishName'];
console.log(yujin2);

// 객체의 특징 
// 1) const 로 선언할 경우 객체 자체를 변경할 수는 없다.
// 2) 객체 안의 프로퍼티나 메소드는 변경할 수 없다.

const wonYoung = {
    name: '장원영',
    group: '아이브',
}

console.log(wonYoung);

// wonYoung = {}; => 에러 발생! : 특징1에 따라, 객체 자체를 변경할 수 없다.
wonYoung['group'] = '이민성 그룹';
console.log(wonYoung);

// 한 객체 내부의 모든 Key / Value 값 다 가져오기
console.log(Object.keys(wonYoung));
console.log(Object.values(wonYoung));
