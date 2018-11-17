// HTTP는 stateless한 서비스.
// 전화를 예로 들어서 설명.

// 이를 해결 할 수 있는 것 : 쿠키, 세션.

// 쿠키는 단순 진동벨.
// 세션은 사용자를 저장하기.

const http = require("http")

const parseCookies = (cookie ="") => 
    cookie
    .split(';')
    .map( v => v.split('='))
    .map( ([k, ...vs]) => [k , vs.join('=')])
    .reduce((acc , [k,v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    }, {})


http.createServer((req,res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log(req.url , cookies)
    res.writeHead(200, {'Set-Cookie':'mycookie=test'})
    res.end("Hello Cookie")
})
    .listen(8082 , () => {
        console.log('8082번 포트에서 서버 대기중입니다.')
    })