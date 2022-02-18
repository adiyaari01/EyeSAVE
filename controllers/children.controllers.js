const catchAsync = require("../utils/catch.util")
const res = require("express/lib/response");
const {model} = require("mongoose");
const Children = model("Child");

// Child.create(
//     {
//     _id:124558966,
//      _firstName:"Zlil", 
//      _lastName:"Tlil", 
//      _address:"habroshim 7 haifa",
//     _escort:[3,4,5],
//     _imageUrl:"www.aaa1.com",
//     _birthdate:'2019-10-19'
//     });

exports.getChildren = catchAsync(async (req,res,next)=>{
    const children = await Children.find().lean();
    return res.status(200).json(children)
});

exports.getChildById = catchAsync(async (req,res,next)=>{
        const child = await Children.findById(req.params.id).lean();
        return res.status(200).json(child)
});

exports.createChild = catchAsync(async (req,res,next)=>{
    await Children.create(req.body);
    return res.status(200).json('created!');
});

exports.updateChild = catchAsync(async(req,res,next)=>{
    await Children.updateOne({_id:req.params.id},{$set:req.body});
    return res.status(200).json({status:'success'});
});

exports.deleteChild = catchAsync(async (req,res,next)=>{
    await Children.deleteOne({_id: req.params.id});
    return res.status(200).json({message:'deleted'});
});