import mongoose from "mongoose";

// 1st :you need to create a schema
// 2st : you would create a model based off of that schema

const noteSchema =new  mongoose.Schema({
    title:{
        type:String ,
        required:true
    },
    content:{
         type:String ,
        required:true
    },

},{
    timestamps:true   //by defualt giv me createAt ,updateAt
}
);


const note = mongoose.model("note",noteSchema)

export default note