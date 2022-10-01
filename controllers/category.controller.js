const categoryModel = require("../models/category.model")

module.exports= {
    getAllCategories: async(req,res,next)=>{
        let category = await categoryModel.find()
        res.json(category)
    },
    createCategory: async(req,res,next)=>{
        let{...body} = req.body
        let category = await categoryModel.create(body)
        res.json(category)
    },
    editCategory: async(req,res,next)=>{
        let{...body} = req.body
        let category = await categoryModel.findOneAndUpdate({_id:body._id},{name:body.name},{new: true})
        res.json(category)
    },
    deleteCategory: async(req,res,next)=>{
        let{...body} = req.body
        let category = await categoryModel.findByIdAndDelete({_id:body._id})
        res.json(category)
    }
}