let fs = require('fs')
let path = require('path')


function testA() {
    let buf = '테스트';

    fs.writeFile(path.join(__dirname, '/sample.txt'), buf, function(err) {
        if (err) throw err;
        console.log('쓰기 완료')

        fs.readFile(path.join(__dirname, '/sample.txt'), 'utf8', function(err, result) {
            if(err) throw err;
            console.log('읽기 : ' + result)
        })
    })
}

testA()

// 자바스크립트 언어의 특성상 순차적으로 비동기 메서드를 실행하기 위해서는
// 위와 같이 함수에서 콜백 메소드를 선언하고 결과를 처리하는 것이 콜백 지옥.
// 유지 보수를 힘들게하고 가독성 또한 떨어진다.