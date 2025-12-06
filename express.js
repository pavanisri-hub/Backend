import express from 'express';
const app = express()
app.get("/users",(req,res)=>{
    res.send("This is users space")
})
app.get("/admin",(req,res)=>{
    res.send("This is admin space")
})

app.listen(3017,()=>{
    console.log(`Server is running at :${3037}`)
});