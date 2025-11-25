const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.get('/about',(req,res)=>{
    const student1={
        name:'John Doe',
        age:22,
        major:'Computer Science'
    };
    const student2={
        name:'Doe',
        age:22,
        major:'CS'
    };
    const student3={
        name:'Dev',
        age:19,
        major:'Electronics'
    };
    const student4={
        name:'Devi',
        age:29,
        major:'Electrical'
    };
    res.send([student1,student2,student3,student4]);
})
app.get('/contact',(req,res)=>{
    res.send('<h1>Contact Page</h1>');
})
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})