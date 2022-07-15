const express= require('express')

const app= express();//framework

const fs=require('fs')
const port=2412//server port

// show the list 
app.get('/',(req,res)=>{
    const itemArr=JSON.parse(fs.readFileSync("cart.json"))
    let totalPrice=0;
    for(let j=0;j<itemArr.length;j++){
        totalPrice+= parseFloat(itemArr[j].product_price*itemArr[j].product_quantity)
    }
    console.log(`Total amount of purchase:- ${totalPrice}`)
    res.status(200).json({
        message:"--------Retrieved Data-----------",
        cart:itemArr
    })
})
app.get('/:product_id',(req,res)=>{
    product_id=req.params.product_id
    const content=JSON.parse(fs.readFileSync("cart.json"))
    const specific_item= content.filter(item=>item.product_id==product_id)
    res.status(200).json({
        message:"----------Retrieved Data----------",
        data:specific_item
    })

})
app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})