const mongoose = require('mongoose');

const ExperienceSchema = mongoose.Schema({
    company:{
        type:String,
        required:true,
    },
    info:{
        type:String,
        required:true,
    },
    role:{
        type:String,
    },
    date:{
        type:String,
    }
})

module.exports = mongoose.model('Experience', ExperienceSchema);