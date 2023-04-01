const Mongoose=require("mongoose")


let eSchema=Mongoose.Schema(
    {
        productID:String,
        productName:String,
        modelNumber:String,
        MRP:String,
        image:String
    }
)

module.exports=Mongoose.model("ecommerce",eSchema)