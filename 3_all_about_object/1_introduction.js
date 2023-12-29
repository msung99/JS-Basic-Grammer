// 객체 선언시 사용할 수 있는 방법들 

// 1. Object 를 이용해서 객체를 생성 - 기본기 {} 
// 2. 클래스를 인스턴스화 해서 생성 - class 와 OOP
// 3. function 을 사용해서 객체를 생성

const yujin = {
    name: '안유진',
    year: 2003,
};
console.log(yujin);

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
console.log(new IdolModel('안유진', 2003));

// 생성자 함수 : function 을 이용해서 객체를 생성하는 방식 
function IdolFunction(name, year) {
    this.name = name;
    this.year = year;
}

const gaFul = new IdolFunction('가을', 2002);
console.log(gaFul);



