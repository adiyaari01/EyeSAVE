const catchAsync = require("../utils/catch.util")
const {model} = require("mongoose");
const Children = model("Child");

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

exports.getChildByParentId = catchAsync(async (req,res,next)=>{
    // children.escorts.includes(req.params.parentId)
    await Children.deleteOne({_id: req.params.id});
    return res.status(200).json({message:'deleted'});
});
