const productModel = require("../models/product.model")

module.exports = {
    getAllproducts: async(req,res,next)=>{
        let products = await productModel.find()
        res.json(products)
    },
    createProduct: async(req,res,next)=>{
        let{...body} = req.body
        let products = await productModel.create(body)
        res.json(products)
    },
    editProduct: async(req,res,next)=>{
        let{...body} = req.body
        let products = await productModel.findByIdAndUpdate({_id:body._id},{
            name:body.name,
            price:body.price,
            quantity:body.quantity,
        },{new: true})
        res.json(products)
    },
    deleteProduct: async(req,res,next)=>{
        let{...body} = req.body
        let products = await categoryModel.findByIdAndDelete({_id:body._id})
        res.json(products)
    }
}