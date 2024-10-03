const knex = require("./knex");

function createCompany(company) {
    return knex("companies").insert(company);
};

function getAllCompanies() {
    return knex("companies").select("*");
};

function deleteCompany(Name) {
    return knex("companies").where("Name", Name).del();
};

function updateCompany(Name, company) {
    return knex("companies").where("Name", Name).update(company);
};

module.exports = {
    createCompany,
    getAllCompanies,
    deleteCompany,
    updateCompany
}