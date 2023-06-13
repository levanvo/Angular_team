import mongoose from "mongoose";

const SchemaMG_Ct = new mongoose.Schema(
    {
        nameList: String,
        products:[{
            type:mongoose.Types.ObjectId,
            // ref:"connect"
            ref:"products"
        }]
    },{timestamps:true,versionKey:false}
);
export default mongoose.model("category",SchemaMG_Ct);