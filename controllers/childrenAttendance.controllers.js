const catchAsync = require("../utils/catch.util")
const {model} = require("mongoose");
const Reports = model("childAttendanceReport");
        
exports.getReports = catchAsync(async (req,res,next)=>{
    const date = req.query._date;
    const filter = {};
    if(date){
        filter._date = date;
    }
    const reports = await Reports.find(filter).lean();
    return res.status(200).json(reports)
});

exports.getReportById = catchAsync(async (req,res,next)=>{
        const report = await Reports.findById(req.params).lean();
        return res.status(200).json(report)
});

exports.createReport = catchAsync(async (req,res,next)=>{
    await Reports.create(req.body);
    return res.status(200).json('created!');
});

exports.updateReport = catchAsync(async(req,res,next)=>{
    await Reports.updateOne(req.params, {$set:req.body});
    return res.status(200).json({status:'success'});
});

exports.deleteReport = catchAsync(async (req,res,next)=>{
    await Reports.deleteOne(req.params).lean();
    return res.status(200).json({message:'deleted'})
});



