const os = require('os');

console.log("-------운영체제 정보")
console.log("os.arch() :", os.arch())
console.log("os.platform() :", os.platform())
console.log("os.type() :", os.type())
console.log("os.uptime() :", os.uptime)
// function ()을 붙이지 않아도 돌아갑니다.
console.log("os.hostname() :", os.hostname())
console.log("os.release() :", os.release())
console.log("------경로")
console.log("os.homedir() :", os.homedir())
console.log("os.tmpdir() :", os.tmpdir())
console.log("------cpu 정보")
console.log("os.cpus() :", os.cpus())
console.log("os.cpus().length :", os.cpus().length)
console.log("------메모리 정보")
console.log("os.freemem() :", os.freemem())
console.log("os.totalmem() :", os.totalmem())

// process 객체와 겹치는 부분이 보인다.
// os 모듈은 컴퓨터 내부 자원에 접근하는 경우에 사용합니다.
// 일반적인 웹 서비스 제작에는 잘 안쓰이지만
// 운영체제 별로 다른 서비스를 제공하고 싶을때, os 모듈이 유용할것이다.
