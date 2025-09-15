const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    user_id:{
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
         required: true,
    },
    name:{
        type: String,
        required: [true, "Please Enter the Name"],
    },
    email:{
        type: String,
        required: [true,"Please Enter the Email"],
        unique: [true],
    },
    phoneNo: {
        type: String, 
        required: [true, "Please Enter the Phone No."]
    }
})


module.exports = mongoose.models.Contact || mongoose.model("Contact", contactSchema)
