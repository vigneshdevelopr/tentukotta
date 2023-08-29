import {User,validate} from "../models/User.js"
import bcrypt from "bcrypt";
import express from'express';
import cookieParser from "cookie-parser";
import helmet from "helmet";


const router = express.Router();

router.use(helmet());
router.use(cookieParser()); 

router.post("/", async(req,res)=>{
    try {
        const {error} = validate(req.body);
        if(error)
        return res.status(400).send({error:error.details[0].message})
        //find a user exist 
        const user = await User.findOne({name:req.body.name});
        if(!user)
        return res.status(400).send({error:"Invalid Authorization"})
        const validPassword = await bcrypt.compare(req.body.password,user.password); 
        if(!validPassword)
        return res.status(400).send({error:"Not a user"})
        res.cookie("name",user.name)
        return res.status(200).send({message:"Sucessfully logged in..."})

    } catch (error) {
        console.log(error)
        return res.status(500).send({error:"Internal server error"})
    }
})

export const loginUser = router; 