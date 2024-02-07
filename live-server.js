const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()

app.use(cors())

app.get('/patients',(request,response) => {
    response.setHeader("Connection", "keep-alive")
    response.setHeader("Content-Type", "text/event-stream")
    response.setHeader("Cache-Control", "no-cache")

    fs.watchFile('./patients.json',() => {
        const data = fs.readFileSync('./patients.json').toString()
        response.write(`event: update\ndata: ${data}\n\n`)
    })

    setInterval(() => {
        response.write("event: ping\ndata: \n\n")
    }, 1000)
})

//add points
setInterval(() => {
    console.log("Updating score")
    let data = JSON.parse(fs.readFileSync('./patients.json').toString())
    data.map(p => {
        p.score++;
    })
    fs.writeFileSync('./patients.json',JSON.stringify(data))
},1000 * 60)

app.listen(3001,() => {
    console.log("Listening on port 3001")
})