const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    age:{
        type: String,
        required : true
    },
    gender:{
        type: String,
        required : true
    }
});

module.exports = mongoose.model('Student', studentSchema );