// 2.템플릿 문자열
// Shift + Alt + A : 다중 주석처리
/* 
let num = 1;
let num2 = 2;
let num3 = 3;

let string = `${num} 더하기 ${num2} = ${num3} 입니다.`
console.log(string)
*/

// python에서 포맷팅과 비슷함.

// 3. 객체 리터럴.

/*
var sayNode = function() {
    console.log("Node")
}

var es = 'ES'
var oldObject = {
    sayJS : function() {
        console.log("JS")
    },
    sayNode: sayNode
}

oldObject['someone'] = 'Fantastic'

oldObject.sayNode();
oldObject.sayJS()
console.log(oldObject)

const newOjbect ={
    sayJS() {
        console.log('JS')
    },
    sayNode,
    [es + 6]: 'Fantastic'
}

// 객체 리터럴에 추가된 문법은 코딩 시 편의를 위해 만들어 진것.
// 익숙 해지면 코드의 양을 많이 줄일 수 있다. */

// 4. 화살표 함수

/* function add1(x,y) {
    return x + y;
}

const add2 = (x,y) => x+ y;

console.log(add1(1,2)) //3
console.log(add2(1,2)) //3
 */

 // 기존의 function 과 다른 점은 this 바인드 방식! 중요.
/* 
var relationship1 = {
    name : 'zero',
    friends : ['nero', 'hero','xero'],
    logFriends : function() {
        var that = this; //relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function(fr){
            console.log(that.name, fr)
        })
    }
}

relationship1.logFriends()

const relationship2 = {
    name: 'zero',
    friends : ['nero', 'hero','xero'],
    logFriends() {
        this.friends.forEach(fr => {
            console.log(this.name , fr);
        })
    }
}
relationship2.logFriends()

// 이 부분도 기억해줘야 할듯. */

// 5. 비구조화 할당.

// 6. 프로미스

// 콜백 함수 대신 프로미스 기반으로 재구성하자. 콜백 지옥을 극복!

/* const condition = true; //true면 resolve, false면 reject.
const function1 = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공')
    } else {
        reject('실패')
    }
})

function1
.then((mes) => {
    console.log(mes); //성공(resolve) 한 경우에 실행
})
.catch((err) => {
    console.error(err);
}) */

// 7. async / await

// 프로미스에서 한발 더 나아간 문법. ES2017에서 추가.