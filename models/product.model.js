const { Timestamp } = require("mongodb");
const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number,
    id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "category"
      },
}, { timestamps: true })


module.exports= mongoose.model("products", productSchema)