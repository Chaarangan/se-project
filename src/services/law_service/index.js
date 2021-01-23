const sequelize = require("../../helpers/sequelizer");
const ApiError = require('../../helpers/ApiError');
const law = require("../../models/lawModel");

const getArticles = async(req, res, next) => {
    // logic to get all articles
    next();
};


const getLaws = async(req, res, next) => {
    // logic to get all laws
    try {
        const laws = await law.findAll();
        req.laws = laws;
        next();
    } catch (e) {
        next(ApiError.badRequest());
    }
};


const getLawById = async(req, res, next) => {
    // logic to get law by id
    try {
        const foundLaw = await law.findAll({
            where: {
                id: req.params.id
            }
        });
        req.foundLaw = foundLaw;
        next();
    } catch (e) {
        next(ApiError.badRequest());
    }
};

const createLaw = async(req, res, next) => {
    // create a new law
    try {
        const num = req.body.law_number,
        law_notes = req.body.law_notes,
            lawyer = req.body.lawyer_id;

            const newLaw = await law.create({
                law_number: num,
                law_notes: law_notes,
                lawyer_id: lawyer
            });
        // Create a new law and save to DB
        req.newLaw = newLaw;
        next();
    } catch (e) {
        console.log(e);
        next(ApiError.badRequest())
    }
};

const updateLaw = async(req, res, next) => {
    // update law
    try {
        const updatedLaw = await law.update({ law_number: req.body.law_number, law_notes: req.body.law_notes, lawyer_id: req.body.lawyer_id }, {
            where: {
                id: req.params.id
            }
        });
        req.updatedLaw = updatedLaw;
        next();
    } catch (e) {
        next(ApiError.badRequest());
    }
};

const deleteLaw = async(req, res, next) => {
    // delte a law
    try {
        await law.destroy({
            where: {
                id: req.params.id
            }
        });
        next();
    } catch (e) {
        next(ApiError.badRequest());
    }
};

const getEmergency = async(req, res, next) => {
    // get emergency numbers

    next();
};

module.exports = {
    getArticles,
    getLaws,
    getLawById,
    getEmergency,
    createLaw,
    updateLaw,
    deleteLaw,
};