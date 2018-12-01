
const SocketIO = require('socket.io')


module.exports = (server) => {
    const io = SocketIO(server , { path: '/socket.io'})

    io.on('connection', (socket) => {
        const req = socket.request
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
        console.log('새로운 클라이언트 접속!', ip, socket.id ,req.ip);
        socket.on('disconnect', () => {
            console.log("클라이언트 접속 해제", ip, socket.id )
            clearInterval(socket.interval)
        });
        socket.on('error', (err) => {
            console.error(err)
        })
        socket.on('reply',(data) => {
            console.log(data)
        })
        socket.interval = setInterval(() => {
            socket.emit('news','Hello Socket.IO')
        }, 3000)
    })
}

// 웹 소켓은 이벤트 기반으로 작동한다.
// 웹 소켓은 서버 뿐만 아니라 클라이언트에서도 웹 소켓 사용.
