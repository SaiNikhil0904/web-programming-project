let express = require("express")

let app = express()

app.listen(3000,()=>{
    console.log("server is connected...")
})
let connectdb = require("./connection/connection.js")
connectdb()

let saveDoc = require("./model/model.js")
saveDoc()