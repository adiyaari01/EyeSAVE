const catchAsync = require("../utils/catch.util")
res = require("express/lib/response");
const {model} = require("mongoose");
const Reports = model("StaffAttendanceReport");

exports.getReports = catchAsync(async (req,res,next)=>{
    const reports = await Reports.find().lean();
    return res.status(200).json(reports)
});

exports.getReportById = catchAsync(async (req,res,next)=>{
        const report = await Reports.findById(req.params.id).lean();
        return res.status(200).json(report)
});

exports.createReport = catchAsync(async (req,res,next)=>{
    await Reports.create(req.body);
    return res.status(200).json('created!');
});

exports.updateReport = catchAsync(async(req,res,next)=>{
    await Reports.updateOne({_id:req.params.id},{$set:req.body});
    return res.status(200).json({status:'success'});
});

exports.deleteReport = catchAsync(async (req,res,next)=>{
    await Reports.deleteOne({_id:req.params.id});
    return res.status(200).json({message:'deleted'});
});



