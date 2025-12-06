import bodyParser from 'body-parser';
import express from 'express'

const app=express()

// app.use(express.json());
app.use(bodyParser.json())
app.get('/get-user',(req,res)=>{
    console.log("Nodemone Workings")
    res.end("You are at users page")
})

app.post('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data)
    
    res.end("data added")
})

app.put('/update-user',(req,res)=>{
    let new_user=req.body
    console.log(new_user.new_user)
    console.log(new_user.RollNumber)
    res.end("New user added")
})
app.delete('/del-user',(req,res)=>{
    let user=req.body
    console.log(user.user)
    res.end("User Removed")
})

app.listen(2027,()=>{
    console.log(`Server running at port ${2027}`)
})