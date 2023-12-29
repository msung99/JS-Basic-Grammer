
function IdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yujin = new IdolModel('안유진', 2003);
console.log(yujin);
console.log(yujin.dance());

const yujin2 = IdolModel('안유진', 2003); // new 키워드를 안쓰면 undefined 가 된다.
console.log(yujin2);
console.log(global.name);

// arrow 함수 활용
const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
}

const yujin3 = IdolModelArrow('안유진', 2003);




