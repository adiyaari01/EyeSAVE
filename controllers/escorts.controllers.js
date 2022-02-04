const res = require("express/lib/response");
const {model} = require("mongoose");
const Escorts = model("Escort");

// Escorts.create(
//     {
//     _id:10095800,
//      _firstName:"Zlil", 
//      _lastName:"Tlil", 
//      _address:"habroshim 7 haifa",
//     _children:[1233278969],
//     _imageUrl:"www.apfs1.com",
//     _phone:"0659483567",
//     _relation:"parent",
//     _birthdate:'1990-10-19'
//     });

exports.getEscorts = async (req,res,next)=>{
    const escorts = await Escorts.find().lean();
    return res.status(200).json(escorts)
}

exports.getEscortById = async (req,res,next)=>{
        const escort = await Escorts.findById(req.params.id).lean();
        return res.status(200).json(escort)
};

exports.createEscort = async (req,res,next)=>{
    await Escorts.create(req.body);
    return res.status(200).json('created!');
}

exports.updateEscort = async(req,res,next)=>{
    if (!req.params.id){
        return res.status(422).json({status:'failed',message:'Id is require'});
    }
    await Escorts.updateOne({_id:req.params.id},{$set:req.body});
    return res.status(200).json({status:'success'});
    }

exports.deleteEscort = async (req,res,next)=>{
    const escort = await Escort.deleteOne({_id:req.params.id}).lean();
    return res.status(200).json('deleted')
}



