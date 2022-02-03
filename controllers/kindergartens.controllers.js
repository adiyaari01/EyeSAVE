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
        
exports.getKindergartens = async (req,res,next)=>{
    try{
        const staff = await Kindergartens.find().lean();
        return res.status(200).json({staff})
    }catch(error){
        return res.status(500).json({error:error.message});
    }
}

exports.getKindergartenById = async (req,res,next)=>{
        const kindergarten = await Kindergartens.findById(req.params.id).lean();
        return res.status(200).json({kindergarten})
};

exports.createKindergarten = async (req,res,next)=>{
    await Kindergartens.create(req.body);
    return res.status(200).json({message: 'created!'});
}

exports.updateKindergarten = async(req,res,next)=>{
    if (!req.params.id){
        return res.status(422).json({status:'failed',message:'Id is require'});
    }
    await Kindergartens.updateOne({_id:req.params.id},{$set:req.body});
    return res.status(200).json({status:'success'});
    }

exports.deleteKindergarten = async (req,res,next)=>{
    const escort = await Kindergartens.deleteOne({_id:req.params.id}).lean();
    return res.status(200).json({message: 'deleted'})
}



