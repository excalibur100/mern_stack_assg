// const { request } = require('express');
const express = require('express');
const port = 5000;
const fs = require('fs');
const app = express();

app.listen(port,()=>{
    console.log('Server started')
})

app.get('/cart',(req, res)=>{
    const content = JSON.parse(fs.readFileSync("cart.json"));
    var ts=0
    content.forEach(value => {
        let{price}  = value;
        ts=ts+price;
    });
    res.status(200).json({
        message:"Retrived data was successfully",
        data1: content,
        data:ts
    })
})

app.get('/cart/:id',(req, res)=>{
    const content = JSON.parse(fs.readFileSync("cart.json"))
    id = req.params.id;
    const matcheddata = content.filter(item => item.product_id == id);
    res.status(200).json({
        message:"Required details is",
        data: matcheddata
    })
})