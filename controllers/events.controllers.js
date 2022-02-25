
const catchAsync = require("../utils/catch.util")
const {model} = require("mongoose");
const Events = model("Event");

exports.getEvents = catchAsync(async (req,res,next)=>{
    const staff = await Events.find().lean();
    return res.status(200).json(staff)
});

exports.getEventById = catchAsync(async (req,res,next)=>{
        const kindergarten = await Events.findById(req.params.id).lean();
        return res.status(200).json(kindergarten)
});

exports.createEvent = catchAsync(async (req,res,next)=>{
    await Events.create(req.body);
    return res.status(200).json('created!');
});

exports.updateEvent = catchAsync(async(req,res,next)=>{
    await Events.updateOne({_id:req.params.id},{$set:req.body});
    return res.status(200).json({status:'success'});
});

exports.deleteEvent = catchAsync(async (req,res,next)=>{
    await Events.deleteOne({_id:req.params.id}).lean();
    return res.status(200).json({message:'deleted'})
});



