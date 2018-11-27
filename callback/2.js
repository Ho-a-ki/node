
let fs = require('fs')
let path = require('path')


let read = () => {
    return new Promise((res,rej) => {
        fs.readFile(path.join(__dirname, '/sample2.txt') , 'utf8', function(err, result) {
            if(err) rej(err);
            else {
                console.log('읽기 : ' + result);
                res()
            }
        });
    });
};

let write = (buf) => {
    return new Promise((res, rej) => {
        fs.writeFile(path.join(__dirname, '/sample2.txt'), buf ,function(err) {
            if (err) rej (err);
            else {
                console.log('쓰기 완료')
                res()
            }
        })
    })
}

async function testD() {
    let buf = '테스트'
    await write(buf)
    await read()
    console.log('완료')
}

testD()