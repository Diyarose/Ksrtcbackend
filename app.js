const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {registermodel}=require("./models/register")
const bcrypt=require("bcryptjs")

const generateHashedPassword=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://dhiya04:dhiyafisat@cluster0.wspdqan.mongodb.net/registerdb?retryWrites=true&w=majority&appName=Cluster0")
app.post("/signup",async(req,res)=>{
   let input=req.body
   let hashedPassword=await generateHashedPassword(input.pass)
   console.log(hashedPassword)
   input.pass=hashedPassword
   let register=new registermodel(input)
   register.save()
   console.log(register)
   res.json({"status":"success"})
})


 
app.listen(8080,()=>{
    console.log("Server started")
})
