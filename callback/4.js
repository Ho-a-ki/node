
let first = 10
let second = 20
let result = 0

function add(x,y) {
    return x+y
}

setTimeout(function() {
    result = add(first, second)
    console.log(result)
}, 1000)

first = 20