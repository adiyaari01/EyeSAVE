const catchAsync = require("../utils/catch.util")
const {model} = require("mongoose");
const Settings = model("settings");

exports.getSettings = catchAsync(async (req,res,next)=>{
    const settings = await Settings.find().lean();
    return res.status(200).json(settings)
});

exports.getSettingsById = catchAsync(async (req,res,next)=>{
    const settings = await Settings.findById(req.params.id).lean();
    return res.status(200).json({settings})
});

exports.createSettigns = catchAsync(async (req, res, next) => {
    await Settings.create(req.body);
    return res.status(200).json('created!');
});

exports.updateSettings = catchAsync(async(req,res,next)=>{
    await Settings.updateOne({_id:req.params.id},{$set:req.body});
    return res.status(200).json({status:'success'});
});

exports.deleteSettings = catchAsync(async (req,res,next)=>{
    await Settings.deleteOne({_id:req.params.id});
    return res.status(200).json({message: 'deleted'})
});