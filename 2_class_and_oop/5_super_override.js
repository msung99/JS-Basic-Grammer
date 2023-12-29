
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요 ${this.name}입니다.`;        
    }
}

class FemaleIdolModel extends IdolModel {
    part;

    constructor(name, year, part) {
        super(name, year); // 부모 생성자 호출
        this.part = part;
    }

    // override
    sayHello() {
        return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고 있습니다.`;        
    }
}

const yujin = new FemaleIdolModel('안유진', 2003, '리더');
console.log(yujin);
console.log(yujin.sayHello());

const wonYoung = new FemaleIdolModel('장원영', 2004, '멤버');
console.log(wonYoung.sayHello());




