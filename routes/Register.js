import express from 'express';
import {User, validate} from '../models/User.js'
import bcrypt from 'bcrypt';

const router = express.Router();

router.post("/", async (req,res)=>{
    try {
        const {error} = validate(req.body)
        if(error)
        return res.status(400).send({error:error.details[0].message}) //to return the first error while validating
        let user = await User.findOne({name:req.body.name});
        if(user)
        return res.status(200).send({error:"Username already exist"})
        //generating strong password using bcrypr hash
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(req.body.password,salt);

        //adding new userbase:
           user = await new User({...req.body, password:hashpassword}).save();
        
        return res.status(200).send({message:"Registered Sucessfully"}); 
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({error:"Internal server error"})
    }
})


export const signupUser = router; 