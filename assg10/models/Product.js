const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const productSchema=new Schema({
    product_name:{
        type:String,
        require:true
    },
    product_price:{
        type:Number,
        require:true
    },
    product_des:{
        type:String,
        require:true
    },
    product_img:{
        type:String,
        require:true
    }
},{timestamps:true})

exports.Product=mongoose.model('product',productSchema);