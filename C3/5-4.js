
// WHATWG 방식의 url 대신, 기존 노드의 url을 사용할 때
// search 부분을 사용하기 쉽게 객체로 만드는 모듈.

const url = require('url')
const querystring = require('querystring')

// data = {oquery : '강아지' , query : '행복해'}
// query1 =  querystring.stringify(data)
// console.log('https://search.naver.com/search.naver?' + query1)

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript')
// url.parse > 주소를 기존의 방식의 url로 분해한다.

const query = querystring.parse(parsedUrl.query)
// querystring.parse(쿼리) > url의 쿼리 부분을 json으로 변환.
// querystring.stringify(객체) > 분해된 걸 다시 문자열로 조립. 

console.log('querystring.parse(): ', query)
console.log('querystring.stringify(): ', querystring.stringify(query))
