const mongoose = require('mongoose');

const vendorschema = new mongoose.Schema({
    vendor_name: { type: String, required: true },
    bank_account: { type: Number, required: true },
    bank_name: { type: String, required: true },
    address_1: { type: String , required: true},
    address_2: { type: String },
    city: { type: String, required: true },
    country: { type: String, required: true },
    zip_code: { type: Number, required: true },
})

const vendormodel = mongoose.model('vendorlist', vendorschema);

module.exports = vendormodel;