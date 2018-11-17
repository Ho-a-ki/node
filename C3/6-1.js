// // 동기 메서드와 비동기 메서드
// // 노드는 대부분의 method 들은 비동기 (Asynchronous) 방식으로 처리.
// // but some method can use by 동기 방식.
// // 특히 파일을 먼저 읽어야 하는 fs 에서는 동기 메서드 방식을 많이 가지고 있음.

// const fs = require('fs')

// console.log('시작')

// fs.readFile('./readmeutf.txt', (err,data) => {
//     if (err) {
//         throw err
//     }
//     console.log('1번', data.toString())
// })

// fs.readFile('./readmeutf.txt', (err,data) => {
//     if (err) {
//         throw err
//     }
//     console.log('2번', data.toString())
// })

// fs.readFile('./readmeutf.txt', (err,data) => {
//     if (err) {
//         throw err
//     }
//     console.log('3번', data.toString())
// })


// console.log("끝")

// // 반복 실행할 때마다 결과가 달라진다.

// 비동기 method 들은 백그라운드에 해당 파일을 읽으라고만 요청하고
// 다음 작업으로 넘어감. 따라서 파일 읽기 요청만 세번을 보내고 
// console.log('끝') 을 찍는다.
// 나중에 읽기가 완료되면 백그라운드가 다시 메인 스레드에 알림.
// 그제서야 메인스레드는 콜백 함수 실행.
// 수백의 I/O 요청을 백그라운드에 요청 처리 위임.

// 노드에서는 동기-블로킹 방식과 비동기-논블로킹 방식이 대부분.
// 비동기-블로킹 방식은 없다고 봐도 됩니다.

// 만약 동기 방법으로 실행하고 싶다면.
// fs.readFileSync 함수를 사용한다.

// 동기 메서드들은 이름 뒤에 sync가 붙이있음
// 다만 메인 스레드가 일을 하지 않고 노는 시간이 생겨서 비효율.
// 비동기 메서드는 백그라운드가 작업을 하는 와중에도 다음 작업 처리 가능.
// 비동기 메서드가 훨씬 더 효율저깅기 때문에 책에서 앞으로 동기 메서드 X

// 그렇다면 비동기 방식으로 순서 유지하고 싶다면?
// > 콜백 함수을 사용합니다.

