// async를 이해하기 앞서서.

// const condition = true;
// const promise = new Promise((res, rej) => {
//   if (condition) {
//     res('성공')
//   } else {
//     rej('실패')
//   }
// })

// promise
//   .then((mes) => {
//     console.log(mes)
//   })
//   .catch((error)=>{
//     console.error(error)
//   })


// function resolveAfter2Second() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved')
//     }, 2000)
//   })
// }

// async function asyncCall() {
//   console.log('calling')
//   var result = await resolveAfter2Second();
//   console.log('result')
// }

// asyncCall()


//