const catchAsync = require("../utils/catch.util")
const req = require("express/lib/request");
const res = require("express/lib/response");
const {model} = require("mongoose");
const Kindergartens = model("Kindergarten");

// Kindergartens.create(
//     {
//     _name:"Kalanit", 
//     _address:"Hahaha 17 haifa",
//     _phone:"0989483567",
//     _children:[124578965,124578966,1233578966,1233278966,1233278969],
//     stff:[1275058966,1234558966,1233876456],
//         parents:[100058966,100958966,100958000]
//     });
        
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



