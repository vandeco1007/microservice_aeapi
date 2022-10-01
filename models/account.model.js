const mongoose= require("mongoose")
const bcryptjs= require("bcryptjs")

const accountSchema= mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  otp: {
    type: String
  },
  time_create_otp: {
    type: String
  },
  password: String,
  role: {
    type: String,
    default: "user"
  },
  email: String
})

accountSchema.pre("save", function(next){
  const account= this;
  if (account.password){
    account.password= bcryptjs.hashSync(account.password, 10)
  }
  next();
})

accountSchema.pre("findOneAndUpdate", function(next){
  const account= {...this.getUpdate()}
  if (account.password){
    account.password= bcryptjs.hashSync(account.password, 10)
  }
   
  this.setUpdate(account)
  next()
})

module.exports= mongoose.model("account", accountSchema)