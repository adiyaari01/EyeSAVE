const res = require("express/lib/response");
const {model} = require("mongoose");
const Reports = model("childAttendanceReport");

// Reports.create(
//     {
//         _childId : "456874569",
//         _arrival : "2022-01-29",
//         _departure : "2022-01-29",
//         _absence:"",
//         _delay:0
//     });
        
exports.getReports = async (req,res,next)=>{
    const reports = await Reports.find().lean();
    return res.status(200).json(reports)
}

exports.getReportById = async (req,res,next)=>{
        const report = await Reports.findById(req.params.id).lean();
        return res.status(200).json(report)
};

exports.createReport = async (req,res,next)=>{
    await Reports.create(req.body);
    return res.status(200).json('created!');
}

exports.updateReport = async(req,res,next)=>{
    if (!req.params.id){
        return res.status(422).json({status:'failed',message:'Id is require'});
    }
    await Reports.updateOne({_id:req.params.id},{$set:req.body});
    return res.status(200).json({status:'success'});
    }

exports.deleteReport = async (req,res,next)=>{
    const report = await Reports.deleteOne({_id:req.params.id}).lean();
    return res.status(200).json('deleted')
}



