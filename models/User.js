import mongoose from "mongoose";
import joi from 'joi';
import PasswordComplexity from "joi-password-complexity";



//Schema Modeling
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    password :{type:String,required:true},
});




//Model initialization
const User = mongoose.model("user", userSchema);

 const validate = (data)=>{
     const schema = joi.object({
         name:joi.string().required().label("Name"),
         password:PasswordComplexity().required().label("Password"),
     });
     return schema.validate(data); 
 }



export {User, validate};