const mongoose = require('mongoose')
const categorySchema = mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    createAt: String,
    updateAt: String
})

categorySchema.pre("save", function(next){
    let date = new Date();
    const category = this;
    category.createAt = date.toLocaleDateString()
    next()
})

categorySchema.pre('findOneAndUpdate', function() {
    let date = new Date()
    const category = this.getUpdate();
    category.updateAt = date.toLocaleDateString()
    console.log(category); 
  });

module.exports = mongoose.model("category",categorySchema)