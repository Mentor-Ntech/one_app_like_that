const  mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    projectName:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    key:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("projects",ProjectSchema)