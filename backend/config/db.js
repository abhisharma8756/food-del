import mongoose from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://abhi:abhi8756@cluster0.998ee.mongodb.net/food-del").then(()=>{
        console.log("DB connected")
    })
}