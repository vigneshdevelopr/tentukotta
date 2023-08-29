import mongoose from "mongoose";
export function MongoConnect(){
    const connectionParams = {
        useNewUrlParser : true,
        useUnifiedTopology:true,
    };

    try{
        mongoose.connect(process.env.MONGO_URL, connectionParams);
        console.log("Your Database is connected successfully");
    }catch (error){
        console.log(error);
    }
}
