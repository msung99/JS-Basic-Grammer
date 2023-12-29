
// static keyword

class IdolModel {
    name;
    year;
    static groupName = '아이브';

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static returnGroupName() {
        return this.groupName;
    }
}

const yujin = new IdolModel('안유잔', 2003);
console.log(yujin);
console.log(IdolModel.groupName); // static 을 쓰게되면 해당 객체가 아닌 클래스 자체에게 귀속된다.

// factory constructor
class IdolModel2 {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(obejct) {
        return new IdolModel2(obejct.name, obejct.year);
    };

    static fromList(list) {
        return new IdolModel(list[0], list[1]);
    }
}

const yujin2 = IdolModel2.fromObject({
    name: '안유진',
    year: 2024
});
console.log(yujin2);

const wonYoung = IdolModel2.fromList(['장원영', 2004]);



