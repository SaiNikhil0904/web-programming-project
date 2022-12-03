const { default: mongoose }= require('mongoose');

let schema = new mongoose.Schema(
{
roll: {type:String, required:true, unique:true},
date_of_adm: {type:Date, default:Date.now},
name: {type:String, required:true},
marks: Number,
repeat: Boolean
}
)


let Student = new mongoose.model("Student", schema)

saveDoc=()=>{
    let s1=new Student({
        roll: "4",
        name: "amit",
        marks:"88",
        repeat:false
    })
s1.save()
}

module.exports = saveDoc
