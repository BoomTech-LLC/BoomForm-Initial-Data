const { IInitials } = require("./src/types");
const fieldsInitials = require("./src/fields").fieldsInitials;
const formInitials = require("./src/form").formInitials;


const initials : typeof IInitials= {
  fieldsInitials,
  formInitials
}

module.exports = initials;
