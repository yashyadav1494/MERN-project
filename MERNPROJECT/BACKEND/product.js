const mongoose=require('mongoose');

const productSchema= new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    stock:{type:Number,required:true,default:0},
    imageUrl:{type:String}
})

module.exports=mongoose.mongoose.model("product",productSchema);