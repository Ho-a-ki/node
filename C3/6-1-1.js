// const fs = require('fs')

// fs.readFile('readmeutf.txt', (err, data) => {
//     // 책에서는 ./ 을 붙였음.
//     if (err) {
//         throw err
//     }
//     console.log(data)
//     console.log(data.toString())
// })

const fs = require('fs')

fs.writeFile('writetest.txt', '글이 입력됩니다.' , (err) => {
    if (err) {
        throw err;
    }
    fs.readFile('writetest.txt', (err, data) => {
        if (err) {
            throw err
        }
        console.log(data.toString())
    })
})