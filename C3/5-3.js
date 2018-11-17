// const url = require('url')
// let url1 = 'http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor'
// const URL = url.URL;
// const myURL = new URL(url1)
// console.log('new URL() :', myURL )
// console.log('위에가 새로 생긴 WHATWG 방식------아래는 기존방식--')
// const parsedUrl = url.parse(url1)
// console.log('url.parse() :', parsedUrl)
// console.log('url.format() :', url.format(parsedUrl))


const { URL } = require('url')
const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript')
console.log('searchParams : ', myURL.searchParams)
console.log('searchParams.getAll() : ', myURL.searchParams.getAll('category'))
console.log('searchParams.get() : ', myURL.searchParams.get('limit'))
console.log('searchParams.has() : ', myURL.searchParams.has('page'))

console.log('searchParams.keys() : ', myURL.searchParams.keys())
console.log('searchParams.values() : ', myURL.searchParams.values())

myURL.searchParams.append('filter','es3')
myURL.searchParams.append('filter','es5')
console.log(myURL.searchParams.getAll('filter'))

myURL.searchParams.set('filter','es6')
console.log(myURL.searchParams.getAll('filter'))

myURL.searchParams.delete('filter')
console.log(myURL.searchParams.getAll('filter'))

console.log('searchParams.toString() :' , myURL.searchParams.toString())
myURL.search = myURL.searchParams.toString();
