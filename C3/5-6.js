// util

// 각종 편의 기능들을 모아둔 기능.
// deprecated > 앞으로 사라지게 될 기능.

const util = require('util')
const crypto = require('crypto')

const dontUseMe = util.deprecate( (x,y) => {
    console.log(x + y)
}, 'dontUseMe 함수는 앞으로 사라질 예정입니다.'
)
// dontUseMe(1, 2)

// 함수가 deprecated 되었음을 알려줄 수 있음.

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
.then( (buf) => {
    console.log(buf.toString('base64'))
})
.catch( (err) => {
    console.err(error)
})