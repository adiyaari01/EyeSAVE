const catchAsync = require("../utils/catch.util")
const {model} = require("mongoose");
const Escorts = model("Escort");

exports.getEscorts = catchAsync(async (req,res,next)=>{
    const escorts = await Escorts.find().lean();
    return res.status(200).json(escorts)
});

exports.getEscortById = catchAsync(async (req,res,next)=>{
        const escort = await Escorts.findById(req.params.id).lean();
        return res.status(200).json(escort)
});

exports.createEscort = catchAsync(async (req,res,next)=>{
    await Escorts.create(req.body);
    return res.status(200).json('created!');
});

exports.updateEscort = catchAsync(async(req,res,next)=>{
    await Escorts.updateOne({_id:req.params.id},{$set:req.body});
    return res.status(200).json({status:'success'});
});

exports.deleteEscort = catchAsync(async (req,res,next)=>{
    await Escorts.deleteOne({_id:req.params.id});
    return res.status(200).json({messgae:'deleted'})
});



