// 다양한 방식의 암호화를 도와주는 모듈
// 몇가지 메서드는 실제 서비스에 적용가능.
// 웹 서비스 만들때 이 모듈을 사용할 예정.

// 비밀번호는 보통 단방향 암호화 알고리즘 사용.
// 단방향 암호화란 복호화할 수 없는 암호화 방식.
// 한번 암호화하면 원래 문자열을 찾을 수 없음.

// 고객의 비밀번호는 복호화할 필요가 없다.
// 고객의 비밀번호를 암호화한 상태에서 데이터베이스에 저장한 후
// 입력 받은 비밀번호를 같은 알고리즘으로 암호화한 후
// 이를 비교하면 되는 것. 원래 비밀번호는 어디에도 저장되지 아니함.

// const crypto = require('crypto')

// console.log('base64 : ' , crypto.createHash('sha512').update('비밀번호').digest('base64'))
// console.log('hex : ' , crypto.createHash('sha512').update('비밀번호').digest('hex'))
// console.log('base64 : ' , crypto.createHash('sha512').update('다른 비밀번호').digest('base64'))


// base64 = 64진법 표기
// hex = 16진법 표기.

// 현재는 주로 pbkdf2나 bcrypt, scrypt 라는 알고리즘으로 비밀번호 암호화.
// 노드에서 지원하는 pbkdf2에 대해서. 문자열에 salt 문자열 합친 후 해시하기.

// const crypto = require('crypto')

// crypto.randomBytes(64, (err, buf) => {
    //     const salt = buf.toString('base64');
    //     console.log('salt : ' , salt)
    //     crypto.pbkdf2('비밀번호', salt, 100000 , 64, 'sha512', (err,key) => {
        //         console.log('password : ', key.toString('base64'))
        //     })
        // })
        
// 10만번 반복하는건 스트레칭이라고 하고
// 솔팅은 비밀번호에 소금치기!
        
// 양방향 암호화.
// 암호화된 문자열을 복호화할 수 있음. 이때 키를 사용하여 복호화.
        
// 암호화하기.
const crypto = require('crypto')
const cipher = crypto.createCipher('aes-256-cbc','열쇠')
let result = cipher.update('암호화할 문장', 'utf-8','base64')
result += cipher.final('base64')
console.log('암호화 :', result)

// 복호화하기.
const decipher = crypto.createDecipher('aes-256-cbc', '열쇠')
let result2 = decipher.update(result,'base64','utf8')
result2 += decipher.final('utf8')
console.log('복호화 :', result2)