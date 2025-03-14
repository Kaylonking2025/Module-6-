const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    fullname: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
        // unique: true
    },
    phone: { 
        type: String,
        trim: true,
        required: false
        
    },
    company_name: {
        type: String,
        required: true

    },
    project_name: {
        type: String,
        trim: true,
        required: true
    },
    project_desc: {
        type: String,
        trim: true,
        required: true
    },
    department: {
        type: String,
        enum:{
            values:['commercial', 'residential', 'industrial', ],
            message: '{VALUE} is not supported'
        },
        trim: true,
        required: true
    },
    message: {
        type: String,
        trim: true,
        required: true
    },
    file: {
        type: String,
        trim: true
    },
}, { timestamps: true })




module.exports = mongoose.model('Contact',ContactSchema)
