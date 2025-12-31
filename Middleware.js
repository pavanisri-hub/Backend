import express from 'express';
import StudentRouter from './routes/studentRoutes.js';
import cors from 'cors';
const app = express();

app.use('/', StudentRouter);
app.use(cors());

app.get('/get-users',(req,res) =>{
    res.send("Hello this is get users endpoint");
})

app.post('/add-users',(req,res) =>{
    console.log(req.body);
    res.send("Data Added successfully");
})

app.listen(7007,() => {
    console.log("Server is running at port 7007");
})


// index.js in backend