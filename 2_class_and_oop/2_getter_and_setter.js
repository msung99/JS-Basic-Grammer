
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    set name(name) {
        this.name = name;
    }

    set setYear(year) {
        this.year = year;
    }
}

const yujin = new IdolModel('안유진', 2003);
console.log(yujin.name);

yujin.name = '장원영'
yujin.setYear = 2024;
console.log(yujin);

class IdolModel2 {
    #name; // private 변수
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }
    
    get name(){
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const yujin3 = new IdolModel2('이민성', 2024);
console.log(yujin3); 
console.log(yujin3.name);