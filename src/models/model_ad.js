import mongoose from "mongoose";

const SchemaAd=mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true,
        },
        pass:{
            type:String,
            require:true
        },
        role:String,
    },
    {
        timestamps:true,
        versionKey:false,
    },
);
export default mongoose.model("admins",SchemaAd);