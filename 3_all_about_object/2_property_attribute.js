
// property attribute
// 1) 데이터 프로퍼티 : Key, Value 로 형성된 실질적 값을 갖고있는 프로퍼티{}
// 2) 엑세서 프로퍼티 : 자체적으로 값을 가지고 있지 않지만, 다른 값을 가져오거나 설정할 떄 호출하는 함수로 구성된 프로퍼티. 예를들면 getter 와 setter

const yujin = {
    name: '안유진', // 각 한줄 한줄이 모두 프로퍼티이다.
    year: 2003,
}

console.log(Object.getOwnPropertyDescriptor(yujin, 'name'));
console.log(Object.getOwnPropertyDescriptors(yujin));

// 1) value : 실제 프로퍼티의 값
// 2) writable : 값을 수정할 수 있는지 여부. false 로 설정하면 프로퍼티를 수정할 수 없다.
// 3) enumberable : 열거가 가능한지의 여부. for...in 등을 사용할 수 있으면 true 를 리턴한다.
// 4) configurable : 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다. false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다. 
//                   단, writable 이 true 인 경우 값 변경과 writable 을 변경 가능한건 가능하다.

const yujin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
};
console.log(yujin2);
yujin2.age = 30;
console.log(yujin2.age);

console.log(Object.getOwnPropertyDescriptor(yujin2, 'age'));

yujin2.height = 172;
console.log(yujin2.height);
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));

Object.defineProperty(yujin2, 'height', {
    value: 172,
    writable: false,
    enumerable: true,
    configurable: true,
});
console.log(yujin2);
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));

// Enumerable
console.log(Object.keys(yujin2));
for(let key in yujin2) {
    console.log(key);
}
