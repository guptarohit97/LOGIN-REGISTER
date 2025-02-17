const express=require('express')
const app=express()
const port=3737

app.use(express.static('public'))
app.use(express.json())

app.post('/',(req,res)=>{
    const {username,password}=req.body
    req.statusCode(200).send({details:{username,password}})
})

app.listen(port,()=>console.log(`Listening to port: ${port}`))