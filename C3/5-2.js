const path = require('path')
const string = __filename

console.log('path.sep() : ', path.sep , '(현재 운영체제에서 사용하는 구분자)')
console.log('path.delimiter() :' , path.delimiter, '환경변수의 구분자.')

console.log("-----------------------")
console.log('path.dirname() :' , path.dirname(string))
console.log('path.extname() :' , path.extname(string))
console.log('path.basename() :' , path.basename(string))
console.log('path.basename() :' , path.basename(string, path.extname(string)))

console.log("-----------------------")
console.log('path.parse() :', path.parse(string))
console.log('path.format() :', path.format({
    dir: 'C:\\users\\gh',
    name: 'path',
    ext: '.js'
}))
console.log('path.normalize() : ', path.normalize('C://users//gh\\Desktop///node//2week//2.js'))

console.log("--------------------")
console.log('path.isAbsolute() : ', path.isAbsolute('C:\\'))
console.log('path.isAbsolute() : ', path.isAbsolute('./home'))
console.log("--------------------")
console.log("path.relative",path.relative('C:\\user\\gh\\Desktop\\node\\week2\\2.js', 'C:\\user\\gh\\workspace'))
console.log('path.join() :', path.join(__dirname,'..','..','/user','.','/zerocho'))
console.log('path.resolve() :', path.resolve(__dirname,'/b','/c','/d','e'))
