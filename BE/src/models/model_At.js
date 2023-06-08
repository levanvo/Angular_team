import mongoose, { mongo } from "mongoose"

const SchemaMG_At = mongoose.Schema(
    {
        name: String,
        image:String,
        email: {
            type:String,
            unique:true,
            required:true
        },
        pass: {
            type:String,
            required:true
        },
        repass:{
            type:String,
            required:true,
        },
        cart:[],
        status:Boolean,
        role:String,
    },
    {timestamps:true,versionKey:false}
);

export default mongoose.model("authors",SchemaMG_At);