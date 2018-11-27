

// exports.handler = function(event, context, callback){
//     console.log(event['httpMethod'])
//     documentClient.scan(params, function(err, data) {
//         if(err) {
//             console.log(err)
//         } else{
//             callback(null, data.Items, event['httpMethod'])
//         }
//     })

// }



// const router = function (event) {
//     method = route_map[event['path']][event['httpMethod']]
//     return method(event)
// }

// const route_map = {
//     '/' : {
//         'GET' : getRes,
//         'POST' : postRes,
//     },
//     '/key': {
//         'GET' : getRes,
//         'POST' : postRes
//     }
// }

// const getRes = function(){
//     return {"http":"get"}
// }

// const postRes = function(){
//     return {"http":"get"}
// }