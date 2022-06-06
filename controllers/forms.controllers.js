const catchAsync = require("../utils/catch.util")
const {model} = require("mongoose");
const Forms = model("forms");

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

exports.getForms = catchAsync(async (req,res,next)=>{
    const date = req.query._date;
    const filter = {};
    if(date){
        filter._date = date;
    }
    const forms = await Forms.find(filter).lean();
    return res.status(200).json(forms)
});

exports.getFormById = catchAsync(async (req,res,next)=>{
        const newDate = new Date();
        // limited form. if expired field is greater then newDate return 404 else return 200
        const query = {_id:req.params.id,_expired:{$gte:newDate}}
        const form = await Forms.findOne(query).lean();
        if (form === null){
            return res.status(404).json({exists: false}).end();
        }
        return res.status(200).json({exists: true}).end();
});

exports.createForm = catchAsync(async (req,res,next)=>{
    const expiredDate = addMinutes(new Date(), 2);
    const form = await Forms.create({_expired: expiredDate})
    return res.status(200).json({formId:form._id});
});

exports.updateForm = catchAsync(async(req,res,next)=>{
    await Forms.updateOne(req.params, {$set:req.body});
    return res.status(200).json({status:'success'});
});

exports.deleteForm = catchAsync(async (req,res,next)=>{
    await Forms.deleteOne(req.params).lean();
    return res.status(200).json({message:'deleted'})
});



