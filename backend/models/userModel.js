// import mongoose from "mongoose";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    lastLogin:{
        type:Date,
        default: Date.now
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    resetPasswordToken:String,
    resetPasswordExpiresAt:Date,
    verificationToken:String,
    verificationExpiresAt: Date,
    
} ,{timestamps: true})



export const User = mongoose.model("User", userSchema)
