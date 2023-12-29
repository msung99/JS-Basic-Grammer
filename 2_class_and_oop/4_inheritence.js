
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance() {
        return `여자 아이돌 ${this.name}이 춤을 춥니다.`;
    }
}

class MaleIdolModel extends IdolModel {
    sing() {
        return `남자 아이돌 ${this.name}이 노래를 합니다.`;
    }
}

const yujin = new FemaleIdolModel('안유진', 2003);
console.log(yujin);

const jimin = new MaleIdolModel('지민', 1999);
console.log(jimin.sing());

console.log(yujin instanceof IdolModel); // true 
console.log(yujin instanceof FemaleIdolModel); // true
console.log(yujin instanceof MaleIdolModel); // false 




