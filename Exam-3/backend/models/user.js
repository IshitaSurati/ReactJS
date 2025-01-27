const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
});

const User= model('User',userSchema)

module.exports=User;