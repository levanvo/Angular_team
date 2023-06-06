import SchemaMG_At from "../models/model_At"
import joi from "joi"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const SchemaJoi_Signup=joi.object({
    name:joi.string().required().messages({
        "string.empty":"Thiếu trường name sản phẩm",
        "any.required":"Bắt buộc nhập name"
    }),
    email:joi.string().required().email().messages({
        "string.empty":"Thiếu trường email",
        "any.required":"Bắt buộc nhập email",
        "string.email":"không đúng kiểu email !"
    }),
    pass:joi.string().required().min(3).messages({
        "string.empty":"Thiếu trường pass",
        "any.required":"Bắt buộc nhập pass",
        "string.min":"Tối thiểu {#limit} kí tự trở lên"
    }),
    repass:joi.string().required().valid(joi.ref("pass")).messages({
        "string.empty":"Thiếu trường repass",
        "any.required":"Bắt buộc nhập repass",
        "any.only":"Không trùng với pass"
    }),
});
const SchemaJoi_Signin=joi.object({
    email:joi.string().required().email().messages({
        "string.empty":"Thiếu trường email",
        "any.required":"Bắt buộc nhập email",
        "string.email":"không đúng kiểu email !"
    }),
    pass:joi.string().required().min(3).messages({
        "string.empty":"Thiếu trường pass",
        "any.required":"Bắt buộc nhập pass",
        "string.min":"Tối thiểu {#limit} kí tự trở lên"
    }),
});

export const Signup=async(req,res)=>{
    try{
        const body=req.body;
        const {error}=SchemaJoi_Signup.validate(body,{abortEarly:false});
        if(error){
            const getError=error.details.map(t=>t.message);
            return res.json(getError);
        };

        const checkEmail=await SchemaMG_At.findOne({email:body.email});
        if(checkEmail){return res.json("Email đã tồn tại !")};

        const hashPass=await bcrypt.hash(body.pass,8);
        const data=await SchemaMG_At.create({
            name:body.name,
            email:body.email,
            pass:hashPass,
        });

        const token=await jwt.sign({_id:data._id},"susi",{expiresIn:"15d"});

        return res.json({message:"Thêm thành công ",data,token});
    }catch(error){return res.status(400).json("try catch Signup Error !!")};
}
export const Signin=async(req,res)=>{
    try{
        const body =req.body;
        const {error}=await SchemaJoi_Signin.validate(body,{abortEarly:false});
        if(error){
            const getError=error.details.map(t=>t.message);
            return res.json(getError);
        };
        const CheckEmail=await SchemaMG_At.findOne({email:body.email});
        if(!CheckEmail){
            return res.status(401).json("Email không tồn tại hoặc chưa đăng kí");
        };
        const CheckPass=await bcrypt.compare(body.pass,CheckEmail.pass);
        if(!CheckPass){
            return res.json("Pass không khớp ?");
        };
        console.log(CheckPass._id);
        const token=await jwt.sign({_id:CheckEmail._id},"susi",{expiresIn:"15d"});
        return res.json({message:"Đănh nhập thành công",CheckPass,token});
    }catch(error){return res.status(400).json("try catch Signin Error !!")};
}
export const AllAuthor=async(req,res)=>{
    try{
        const body =req.body;
        const data=await SchemaMG_At.find();
        return res.json({message:"Tất cả users: ",data});
    }catch(error){return res.status(400).json("try catch Signin Error !!")};
}
