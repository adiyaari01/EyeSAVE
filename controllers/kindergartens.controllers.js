const catchAsync = require("../utils/catch.util")
const req = require("express/lib/request");
const {model} = require("mongoose");
const Kindergartens = model("Kindergarten");

exports.getKindergartens = catchAsync(async (req,res,next)=>{
    const kindergartens = await Kindergartens.find().lean();
    return res.status(200).json({kindergartens})
});

exports.getKindergartenById = catchAsync(async (req,res,next)=>{
    const kindergarten = await Kindergartens.findById(req.params.id).lean();
    return res.status(200).json({kindergarten})
});

exports.createKindergarten = catchAsync(async (req,res,next)=>{
    await Kindergartens.create(req.body);
    return res.status(200).json({message: 'created!'});
});

exports.updateKindergarten = catchAsync(async(req,res,next)=>{
    await Kindergartens.updateOne({_id:req.params.id},{$set:req.body});
    return res.status(200).json({status:'success'});
});

exports.deleteKindergarten = catchAsync(async (req,res,next)=>{
    await Kindergartens.deleteOne({_id:req.params.id});
    return res.status(200).json({message: 'deleted'})
});



