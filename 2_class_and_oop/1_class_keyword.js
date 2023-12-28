
class IdolModel {
    // name;
    // year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayName() {
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

const yujin = new IdolModel('안유진', 2003);
const yujin2 = new IdolModel('안유진2', 2004);
console.log(yujin);
console.log(yujin.name);
console.log(yujin.sayName());


console.log(typeof IdolModel); // function
console.log(typeof yujin); // model


