
// try...catch

function runner() { 
    try {
        console.log("Hello1");
        throw new Error("큰 문제가 생겼습니다.");
        console.log("Hello2");
    } catch(e) {
        console.log('--------');
        console.log(e);
    } finally {
        console.log('---무조건 실행되는 부분----');
    }
}

runner();