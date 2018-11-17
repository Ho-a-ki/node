const http = require('http');

const server = http.createServer((req, res) => {
    res.write("<h1>Hello node</h1>")
    res.end("<p>Hello Server!</p>")
})

// 서버에 listening 이벤트 리스너 붙이기도 가능!

server.listen(8080);;
server.on('listening', () => {
    console.log('8080번 포트에서 대기중!')
})

server.on('error', (err) => {
    console.error(err)
})

// res 객체에는 write와 end 메서드가 있음.
