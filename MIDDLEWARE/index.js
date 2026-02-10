const express=require('express');
const fs=require('fs');

const app=express();

// app.use((req,res,next)=>{
//     console.log('middleware1')
//     next()
// })
// app.use((req,res,next)=>{
//     console.log("middleware2")
//     next()
// })
// app.use(async(req,res,next)=>{
//     const date=new Date().toLocaleString();
//     fs.appendFile("log.txt",date+"\n",(err)=>{
//         if(err){
//             console.log(err);
//         }
//     })
//     next()
// })
// app.get("/",(req,res)=>{
//     return res.send('hello world')
// })
// app.get("/student",(req,res)=>{
//     return res.send('hello student');
// })
// app.listen(3000,(err)=>{
//     console.log('server is running on port 3000')
// })


// for authentication middleware.



function authMiddleware(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.send("Login first");
    }
    if (token === "123") {  
        next();
    } else {
        res.send("Invalid User");
    }
}

// -------- Routes --------

// Public route
app.get('/', (req, res) => {
    res.send("Home Page (No Auth Needed)");
});
// Protected route
app.get('/dashboard', authMiddleware, (req, res) => {
    res.send("Welcome to Dashboard");
});
app.listen(8000, () => {
    console.log("Server running on port 8000");
});

