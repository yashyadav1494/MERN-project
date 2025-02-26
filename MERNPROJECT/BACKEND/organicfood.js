const mongoose=require('mongoose');

const organicSchema= new mongoose.Schema({
    
    
        name: String,
        price: Number,
        imageUrl: String,
      
    
    products: [
        
      ],
      total: Number,
      status: {
        type: String,
        
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },

})

module.exports=mongoose.model("Organic",organicSchema);