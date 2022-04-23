const catchAsync = require("../utils/catch.util")
const { model } = require("mongoose");
const { StandardValidation } = require("express-validator/src/context-items");
const Staff = model("Staff");

exports.getStaff = catchAsync(async (req, res, next) => {
    const staff = await Staff.find().lean();
    return res.status(200).json(staff)
});

exports.getStaffMemberById = catchAsync(async (req, res, next) => {
    const staff = await Staff.findById(req.params.id).lean();
    return res.status(200).json(staff)
});

exports.createStaffMember = catchAsync(async (req, res, next) => {
    await Staff.create(req.body);
    return res.status(200).json('created!');
});

exports.updateStaffMember = catchAsync(async (req, res, next) => {
    await Staff.updateOne({ _id: req.params.id }, { $set: req.body });
    return res.status(200).json({ status: 'success' });
});

exports.deleteStaffMember = catchAsync(async (req, res, next) => {
    await Staff.deleteOne({ _id: req.params.id });
    return res.status(200).json({ message: 'deleted' })
});

exports.getStaffByEmail = catchAsync(async (email) => {
    const staff = await Staff.find({ _email: email }).lean();
    return staff
});

exports.updateEmployee = catchAsync(async (employee) => {
    const staff = await Staff.updateOne({ _id: employee._id }, { $set: employee }).lean();
    return staff;
});



