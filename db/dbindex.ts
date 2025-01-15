import * as mongoose from "mongoose"

const connectDb = async(uri : string) =>{

    try{
        await mongoose.connect(uri)
        console.log("Db server started");
        
    }
    catch(e : unknown) {

        console.log("Error connection db");
        
    }
}