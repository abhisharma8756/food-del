import fooModel from "../models/foodModel.js";
import fs from 'fs'

// add food item
const addFood = async (req, res) =>{

    let image_filename = `${req.file.filename}`;

    const food = new fooModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename,
    })
    try {
        await food.save();
        res.json({success:true, message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }

}

// All food list
const listFood = async (req,res) =>{
    try {
       const foods = await fooModel.find({});
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

// Remove food item

const removeFood = async (req,res)=>{
    try {
        const food = await fooModel.findById(req.body.id)
        fs.unlink(`uplaods/${food.image}`,()=>{})

        await fooModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:"Food Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addFood, listFood, removeFood}