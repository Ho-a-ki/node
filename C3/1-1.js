const { odd, even } = require('./m-var')
const checkNumber = require('./1')

function checkStringOddorEven(str) {
    if (str.length % 2){
        return odd
    }
    return even
}

console.log(checkNumber(10))
console.log(checkStringOddorEven('hello'))


// 여기서 1-1.js는 m-var와 1.js 모두를 참조한다.
// 모듈 하나가 여러개의 모듈을 사용할 수 있고, 의존하게 구성 가능.

// ES2015가 도입 되면서 JS에도 자체 모듈 시스템 문법이 생겼다.
// 노드의 모듈 시스템과는 문법이 살짝 다름.

// import,export 로 쓰이는게 ES 2015에서 쓰이는 module 시스템.
// 리액트에서 흔히 보입니다.