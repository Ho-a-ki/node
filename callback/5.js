
// function 키워드 앞에 async만 붙여주면 되고
// 비동기로 처리되는 부분 앞에 await만 붙여주면 된다.
// await 뒷 부분이 반드시 promise를 반환해야 한다.
// async fucntion 자체도 promise를 반환한다.

const axios = require("axios")
const url = 'https://jsonplaceholder.typicode.com/todos/1'

function getData(url) {
    return axios(url)
        .then(res => console.log(res.data))
        .catch(err => {
            console.error(err)
        })
}

async function getData2(url) {
    try {
        const res = await axios(url)
        console.log(await res.data)
    }
    catch (err) {
        console.log('faild', err)
    }
}

async function getData3(url) {
    const res = await axios(url)
    console.log(res.data)
}

getData3(url)

function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 2초가 걸리는 작업
            resolve('비동기 작업 완료')
        }, 3000)
    })
}

async function waitTask() {
    const asyncValue = await asyncTask();
    console.log(asyncTask);
}