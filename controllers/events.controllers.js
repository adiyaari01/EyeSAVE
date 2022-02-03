const res = require("express/lib/response");
const {model} = require("mongoose");
const Events = model("Event");

// Events.create(
//     {
//         _kindergartenId:'61f4ed622d60f6acb48a0e8d',
//         _eventType : "Fall",
//         _videoUrl : "www.ggg.com",
//         _timeStamp : '2021-01-29',
//         // const currentDate = new Date();
//         // const timestamp = currentDate.getTime();
//     }
//)
// staff.create(
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
        
exports.getEvents = async (req,res,next)=>{
    const staff = await Events.find().lean();
    return res.status(200).json(staff)
}

exports.getEventById = async (req,res,next)=>{
        const kindergarten = await Events.findById(req.params.id).lean();
        return res.status(200).json(kindergarten)
};

exports.createEvent = async (req,res,next)=>{
    await Events.create(req.body);
    return res.status(200).json('created!');
}

exports.updateEvent = async(req,res,next)=>{
    if (!req.params.id){
        return res.status(422).json({status:'failed',message:'Id is require'});
    }
    await Events.updateOne({_id:req.params.id},{$set:req.body});
    return res.status(200).json({status:'success'});
    }

exports.deleteEvent = async (req,res,next)=>{
    const kindergarten = await Events.deleteOne({_id:req.params.id}).lean();
    return res.status(200).json('deleted')
}



