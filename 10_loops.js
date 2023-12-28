
let square = '';
for(let i=1; i<=3; i++) {
    for(let j=1; j<=3; j++) {
        square += '*';
    }
    square += '\n';
}
console.log(square);


const yujin = {
    name: '안유진',
    year: 2003,
}

// for-in loop 을 Object 에서 사용하면 key 값에 대해 순회한다.
for(let key in yujin) {
    console.log(key);
}

// 반대로 배열에서 사용하면 인덱스 값에 대해 순회한다.
const arr = ['안유진', '장원영', '이서']
for(let key in arr) {
    console.log(key); // 0
    console.log(`${key}:${arr[key]}`); // 0:안유진 
}


for(let value of iveMmeberArray) {
    console.log(value);
}

// while 문
let number = 0;
while(number < 10) {
    console.log(number);
    number++;
}

// do..while 문
do {
    number++;
} while(nubmer < 10);


// break, continue
for(let i=0; i<5; i++) {
    if(i == 2) {
        break;
    }
    console.log(i);
}

for(let i=0; i<5; i++) {
    if(i == 2) {
        continue;
    }
    console.log(i);
}

