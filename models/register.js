const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,required:true},
        "email":{type:String,required:true},
        "phone":{type:String,required:true},
        "gender":{type:String,required:true},
        "pass":{type:String,required:true}
        
       

    }
)
let registermodel=mongoose.model("registers",schema);
module.exports={registermodel}