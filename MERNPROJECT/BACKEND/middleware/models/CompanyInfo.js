const mongoose = require('mongoose');

const companyInfoSchema = new mongoose.Schema({
  about: { type: String, required: true },
  mission: { type: String, required: true },
  contact: { type: String, required: true },
  logo: { type: String, required: true },
});

const CompanyInfo = mongoose.model('CompanyInfo', companyInfoSchema);

module.exports = CompanyInfo;
