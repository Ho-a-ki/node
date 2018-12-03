
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req,res) => {
    res.send(
        [{
            title: "Hello World!",
            description : "Hi there!"
        }]
    )
})

app.listen(process.env.PORT || 8081, () =>{
    console.log('8081 번 포트에서 대기중')
} )


// const server = app.listen(app.get('port'), () => {
//     console.log(app.get('port'), '번 포트에서 대기중');
//   });
  

