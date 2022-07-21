const express=require('express');
const fs=require('fs');

const {Product}=require('../models/Product')
const router=express.Router();


router.get('/',async (req,res)=>{
    try{
        const products=await Product.find();
        return res.status(200).json({
            message:"Product retrive successfuly",
            products
        })
          
    }catch(err){
        return res.status(500).json({
            message:"something went wrong",
            error:err.message
        })
    }
    
})

router.post('/add',async (req,res)=>{
    try{
       
        //reading the input for the course object
        const {product_name,product_price,product_des,product_img}=req.body;
        //createing the course object
        if(product_name=='' && error==''){
            error="MIssing product Name";
            res.status(400).json({
                message:error
            })
        }
        if(product_price=='' && error==''){
            error="MIssing product Prices";
            res.status(400).json({
                message:error
            })
        }
        
        const productObj={
            product_name,
            product_price,
            product_des,
            product_img
        }

        const product=new Product(productObj);
        await product.save();
       return  res.status(200).json({
            message:"product seved successfully"
        })

    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
})

router.put("/update/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const {product_name,product_price,product_des,product_img}=req.body;
        if(product_name==''|| product_name== undefined){
            error="MIssing product Name";
            res.status(400).json({
                message:error
            })
        }
        if(product_price==''|| product_price== undefined){
            error="MIssing product Prices";
            res.status(400).json({
                message:error
            })
        }
        
        await Product.findByIdAndUpdate(id,{product_name,product_price,product_des,product_img})
        return res.status(200).json({
            message:"course Updated successfully"
        })

    // const product=await Product.findById(id);
    // product.product_name=product_name;
    // product.product_price=product_price;
    // product.product_des=product_des;
    // product.product_img=product_img;
    await product.save();
    return res.status(200).json({
        message:"product Updated successfully"
    })
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
    
})

router.get('/:name',async(req,res)=>{
    try{
        const product_name=req.params.product_name;
       const product= await Product.findOne(product_name);
        res.status(200).json({
        message:"Data fetched",
        product
       })
    }catch(err){
      res.status(500).json({
            message:"something went wrong",
            error:err.message
        })
    }
    
})

router.delete("/delete/:id",async(req,res)=>{
    try{
       await Product.findByIdAndDelete(req.params.id);
       return res.status(200).json({
         message:"Data deleted",
        
       })
    }catch(err){
        return res.status(500).json({
            message:"something went wrong",
            error:err.message
        })
    }
})

module.exports=router;