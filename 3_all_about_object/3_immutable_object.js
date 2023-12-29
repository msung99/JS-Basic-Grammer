
// Object.preventExtensions()
const yujin = {
    name: '안유진',
    year: 2003, 

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - this.year;
    }
}

console.log(yujin);
console.log(Object.isExtensible(yujin));

yujin['position'] = 'vocal';
console.log(yujin);

Object.preventExtensions(yujin); // property 추가 불가능
console.log(Object.isExtensible(yujin));

yujin['groupName'] = '아이브'; // groupName 이라는 property 생성 안됨
console.log(yujin);

delete yujin['position'] // property 추가는 안되지만, 삭제느 가능하다.
console.log(yujin);

// Object.seal()
const yujin2 = {
    name: '안유진',
    year: 2003, 

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - this.year;
    }
}
console.log(yujin2);
console.log(Object.isSealed(yujin2));

Object.seal(yujin2); // 봉인하기
console.log(Object.isSealed(yujin2));

yujin2['groupName'] = '아이브'; // 추가 안됨
console.log(yujin2);

delete yujin2['groupName']; // 삭제 안됨
console.log(yujin2);

Object.defineProperty(yujin2, 'name', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yujin2, 'name'));

// Object.freezed()
// 읽기외에 모든 것들을 불가능하게 만든다.

const yujin3 = {
    name: '안유진',
    year: 2003, 

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - this.year;
    }
}

Object.freeze(yujin3);
console.log(Object.isFrozen(yujin3));

delete yujin3['name'];
console.log(yujin3); // 삭제 안됨

// Object.defineProperty(yujin3, 'name', {
//    value: '코드펙토리',
// });
// => 에러 발생

console.log(Object.getOwnPropertyDescriptor(yujin3, 'name'));


const yujin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - this.year;
    }
};
Object.freeze(yujin4);
console.log(Object.isFrozen(yujin4)); // true
console.log(Object.isFrozen(yujin4['wonYoung'])); // false => 상위 객체를 freeze 했다고 해서, 하위 객체까지 freeze 되지 않는다.





