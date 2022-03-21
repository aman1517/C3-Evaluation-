const express=require("express");
const mongoose=require("mongoose");
const app=express()
const connect=()=>{
    return mongoose.connect("mongodb+srv://Aman123:aman@cluster0.v2cb4.mongodb.net/c3eavl?retryWrites=true&w=majority")
}
const userModel=new mongoose.Schema({
    firstName:{type:String,required:true,minlength:3,maxlength:30},
    lastName:{type:String,minlength:3,maxlength:30},
    age:{type:Number,required:true},
    email:{type:String,required:true,unique:true},
    profileImages:{type:String,required:true} ,
},
{
    versionKey:false,
    timestamps:true,
}
);
const User=mongoose.model("user",userModel);
// ===========book model Schema===================
const bookModel=new mongoose.Schema({
   
    likes:{type:Number,default:0},
    coverImages:{type:String,required:true} ,
    content:{type:String,required:true},
},
{
    versionKey:false,
    timestamps:true,
}
);
const Books=mongoose.model("book",bookModel);

// =============Publication Model================
const publicationModel=new mongoose.Schema({
    name:{type:String,required:true},

},
{
    versionKey:false,
    timestamps:true,
},{
    UserId:{type:mongoose.Schema.Types.ObjectId},
    ref:User,
}

);
const publication=mongoose.model("publication",publicationModel);
// ======================Comment=====================
const commentModel= new mongoose.Schema({
    body:{type:String,required:true},
},
{
    versionKey:false,
    timestamps:true,
    required:true
})
 const Comment= mongoose.model("comment",commentModel);
 app.get("/userModel",async(req,res)=>{
     try{
         const userModel=await userModel.create(req.body);
         return res.status(200).send(user)
     }catch(err){
        return res.status(500).send({messege:err.messege});
     }
 });
 app.get("/userModel/:id",async(req,res)=>{
     try{
         const userModel=await userModel.findById(res.prams.id).lean.exce();
         return res.status(200).send(user)
     }catch(err){
         return res.status(500).send({messege:err.messege})
     }
 });
 app.post("/userMoel",async(req,res)=>{
     try{
         const userModel=await userModel.create(req.body);
         return res.status(200).send(user)
     }catch(err){
         ConvolverNode.log("error")
     }
 })
app.listen(5000,async()=>{
    try{
        connect();
    }catch(err){
        console.log("error")
    }
    console.log("listing the port 5000")
})