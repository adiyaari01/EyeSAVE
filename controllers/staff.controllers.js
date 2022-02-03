const res = require("express/lib/response");
const {model} = require("mongoose");
const Staff = model("StaffMember");

// Staff.create(
//     {
//     _id:1275058966,
//      _firstName:"Tova", 
//      _lastName:"Jakobson", 
//      _address:"kikayon 7 haifa",
//     _imageUrl:"www.apsefs1.com",
//     _phone:"0779483567",
//     _position:"Manager",
//     _birthdate:'1993-03-19'
//     });

    // staff.create(
    //     {
    //     _id:1234558966,
    //      _firstName:"Shoshi", 
    //      _lastName:"shoshana", 
    //      _address:"kikayon 67 Hadera",
    //     _imageUrl:"www.ap22fs1.com",
    //     _phone:"0778983567",
    //     _relation:"Assistant",
    //     _birthdate:'1995-03-03'
    //     });
        
exports.getStaff = async (req,res,next)=>{
    const staff = await Staff.find().lean();
    return res.status(200).json(staff)
}

exports.getStaffMemberById = async (req,res,next)=>{
        const escort = await Staff.findById(req.params.id).lean();
        return res.status(200).json(escort)
};

exports.createStaffMember = async (req,res,next)=>{
    await Staff.create(req.body);
    return res.status(200).json('created!');
}

exports.updateStaffMember = async(req,res,next)=>{
    if (!req.params.id){
        return res.status(422).json({status:'failed',message:'Id is require'});
    }
    await Staff.updateOne({_id:req.params.id},{$set:req.body});
    return res.status(200).json({status:'success'});
    }

exports.deleteStaffMember = async (req,res,next)=>{
    const escort = await Staff.deleteOne({_id:req.params.id}).lean();
    return res.status(200).json('deleted')
}



