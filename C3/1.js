// 1 REPL 사용하기.
// Read, Eval, Print, Loop.
// 인터프리터를 실행하는 거랑 비슷한듯.

// 2 JS 파일 실행하기.

// 3 모듈로 만들기

const { odd, even } = require('./m-var')

function checkOddorEven(num) {
    if (num % 2) {
        // 홀수면 답이 1이므로 true.
        return odd
    }
    return even
}

module.exports = checkOddorEven;