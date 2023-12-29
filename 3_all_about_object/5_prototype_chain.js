
// prototype

const testObj = {};
console.log(testObj.__proto__);

// __proto__ 는 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}
console.log(IdolModel.prototype);

console.dir(IdolModel.prototype, { // prototype Object 내부를 조회
    showHidden: true,
});

// circular reference
console.log(IdolModel.prototype.constructor === IdolModel);  // true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true

const yujin = new IdolModel('안유진', 2003);
console.log(yujin.__proto__);
console.log(yujin.__proto__ === IdolModel.prototype); // true

console.log(testObj.__proto__ === Object.prototype); // testObj 는 아무 property 도 없는 객체인데,
// 부모로 자동으로 Object 의 prototype 이 들어간 것을 볼 수 있다.


// prototype chain
console.log(IdolModel.__proto__  === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);


console.log(yujin.toString());
console.log(Object.prototype.toString());


function IdolModel2(name, year) {
    this.name = name;
    this.year = year;
    
    this.sayHello = function() {
        return `${this.name}이 인사를 합니다.`;
    }
}

const yujin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yujin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yujin2.sayHello === wonYoung2.sayHello); // false
console.log(yujin2.hasOwnProperty('sayHello')); // true => 본인만의 고유 property 이라는 것. 즉, yujin2 의 sayHello() 는 상속받은 것이 아니다.

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function() {
    return `${this.name}이 인사를 합니다.`;
}

const yujin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2004);

console.log(yujin3.sayHello()); 
console.log(wonYoung3.sayHello());
console.log(yujin3.sayHello === wonYoung3.sayHello); // true => 한 공간에만 sayHello 가 존재하고, 그를 공유하며 사용하는
console.log(yujin3.hasOwnProperty('sayHello')); // false

IdolModel3.sayStaticHello = function() {
    return `안녕하세요 저는 static 메소드입니다.`;
}
console.log(IdolModel3.sayStaticHello());


// overriding 
function IdolModel4(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function() {
        return `안녕하세요 저는 인스턴스 메소드입니다.`;
    }
}

const yujin4 = new IdolModel4('안유진', 2003);
console.log(yujin4.sayHello());

// 프로퍼티 셰도잉 - class 에서 Override
console.log(yujin4.sayHello());

// getPrototypeOf, setPrototypeOf
// 인스턴스의 __proto__ 변경, 함수의 prototype 변경

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function() {
    return `${this.name}이 인사를 합니다.`;
}

function FemaleModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleModel('레이', 2004);









