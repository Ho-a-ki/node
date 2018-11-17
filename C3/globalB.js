const A = require('./globalA')

global.message = '안녕하세요?'
console.log(A())

// globalA

// module.exports = () => global.message;
// 글로벌A 모듈의 함수는 global.message 값을 반환한다.
// 따라서 const A 에는 global.message 값을 반환하는 함수가 담김.
// 따라서 global.message를 선언한 뒤 A()를 실행하면 안녕하세요가 출력.