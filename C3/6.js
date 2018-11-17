const fs = require('fs')


// fs 모듈은 파일 시스템 (File System) 에 접근하는 모듈.
// 파일,폴더(디렉토리)을 생성하거나 삭제, 읽을 수 있다. 

fs.readFile('./readmeutf.txt', (err,data) => {
    if (err) {
        throw err;
    }
    console.log(data)
    console.log(data.toString())
})

// readfile의 결과물은 버퍼라는 형식으로 제공.
// 메모리의 데이터라고 이해.


// fs.writeFile('./writeme.txt', '글이 입력됩니다.',(err) => {
//     if (err) {
//         throw err;
//     }
//     fs.readFile('./writeme.txt', (err, data) => {
//         if(err) {
//             throw err;
//         }
//         console.log(data.toString())
//     })
// })