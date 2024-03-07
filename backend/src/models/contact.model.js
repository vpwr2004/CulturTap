import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    countryCode: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    concern: [
        {
            type: String,
            required: true,
        }
    ]

});

const Contact = mongoose.model("Contact", contactSchema);