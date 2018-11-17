// setInterval(() => {
//     console.log('시작')
//     try {
//         throw new Error("에러를 일으킵니다.")
//     } catch (err) {
//         console.error(err)
//     }
// }, 1000);

// const fs = require('fs')

// setInterval(() => {
//     fs.unlink('abc.js' , (err) => {
//         if (err) {
//             console.error(err);
//         }
//     })
// }, 1000);

process.on('uncaughtException', (err) => {
    console.error("예기치 못한 에러" , err)
})

setInterval(() => {
    throw new Error("에러를 일으킵니다.")
}, 1000);

setTimeout(() => {
    console.log('실행됩니다.')
}, 2000);
