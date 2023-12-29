/*
this
=> JS는 Lexical Scope 를 사용하기 때문에 함수의 상위 스코프가 정의 시점에 평가된다.
하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.
*/

const testFunction = function() {
    return this;
}

console.log(testFunction()); // 일반 함수가 this 를 리턴하면 global object 와 매핑된다.
console.log(testFunction() === global);

const yujin = {
    name: '안유진',
    year: 2003,
    sayHello: function() {
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

console.log(yujin.sayHello());

function Person(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function() {
        return `안녕하세요 저는 ${this.name} 입니다.`;
    }
}

const yujin2 = new Person('안유진', 2003);
console.log(yujin2);

Person.prototype.dance = function() {
    function dance2() {
        return `${this.name}이 춤을 춥니다.`;
    }
    return dance2();
}
console.log(yujin2.dance());


/*
this 키워드가 어떤걸 가르키는지는 3가지만 기억하면된다.
1) 일반 함수를 호출할 땐 this 가 최상위 객체 (global 또는 window) 를 가리키게 된다.
2) 메소드로 호출할 땐 호출된 객체를 가리킨다.
3) new 키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다.
*/

/*
1) apply()
2) call()
3) bind()
*/

function returnName() {
    return this.name;
}
console.log(returnName()); // this 가 global 에 매핑되므로, global.name 은 존재하기 않기 때문에 undefined 가 뜬다.

const yujin3 = {
    name: '안유진',
}
 
console.log(returnName.call(yujin3)); // this 가 yujin3 에 바인딩된다. => returnName 이 yujin3 에 바인딩되서 call 된다.
console.log(returnName.call(yujin3));

/*
1) call => 콤마를 기반으로 파라미터를 순서대로 넘겨주고
2) apply => 파라미터를 리스트로 입력해야한다.
*/

function multiply(x, y, z) {
    return `${this.name} / 결과 : ${x * y * z}`;
}
console.log(multiply.call(yujin, 3, 4, 5));
console.log(multiply.apply(yujin, [3, 4, 5]));

// bind() => this 를 바인딩만 해놓고 나중에 실행할 수 있다.
const laterFunc = multiply.bind(yujin3, 3, 4, 5);
console.log(laterFunc);
console.log(laterFunc());
