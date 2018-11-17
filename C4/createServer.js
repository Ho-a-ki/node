const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>Hello Node! </h1>');
    res.end('<p> Hello Server! </p>');
    // 어떻게 응답할거예요?
}).listen(8080, () => {
    console.log('8080번 포트에서 대기중!')
})