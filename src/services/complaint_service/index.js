const sequelize = require("../../helpers/sequelizer");
const complaint = require("../../models/complaintModel");
const ApiError = require('../../helpers/ApiError');

const getComplaints = async(req, res, next) => {
    // logic for getting all complaints
    try {
        const complaints = await complaint.findAll();
        req.complaints = complaints;
        next();
    } catch (e) {
        next(ApiError.badRequest());
    }
};

const getComplaintById = async(req, res, next) => {
    // logic for getting a complaint by id
    try {
        const foundComplaint = await complaint.findAll({
            where: {
                id: req.params.id
            }
        });
        req.foundComplaint = foundComplaint;
        next();
    } catch (e) {
        next(ApiError.badRequest());
    }
};

const createComplaint = async(req, res, next) => {
    // create new complaint
    console.log(req.body);
    try {
        const nic = req.body.nic,
            f_n = req.body.full_name,
            mob = req.body.mobile,
            add = req.body.address,
            file = req.body.file,
            comp = req.body.complaint,
            people = req.body.people_id;

        // Create a new complaint and save to DB 
        const newComplaint = await complaint.create({
            nic: nic,
            full_name: f_n,
            mobile: mob,
            address: add,
            complaint: comp,
            file: file,
            people_id: people,
            created_on: Date.now(),
            status: 0
        });
        req.newComplaint = newComplaint;
        next();
    } catch (e) {
        next(ApiError.badRequest());
    }
};

const updateComplaint = async(req, res, next) => {
    // update complaint logic
    console.log(req.body);
    try {
        const updatedComplaint = await complaint.update({ nic: req.body.nic, full_name: req.body.full_name, mobile: req.body.mobile, address: req.body.address, complaint: req.body.complaint, file: req.body.file, status:req.body.status }, {
            where: {
                id: req.params.id
            }
        });
        next();
    } catch (e) {
        next(ApiError.badRequest())
    }
};

const deleteComplaint = async(req, res, next) => {
    // delete complaint logic
    try {
        await complaint.destroy({
            where: {
                id: req.params.id
            }
        });
        next();
    } catch (e) {
        next(e);
    }
};

module.exports = {
    getComplaints,
    getComplaintById,
    createComplaint,
    updateComplaint,
    deleteComplaint,
};