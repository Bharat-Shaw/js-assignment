const express = require('express');
const vendormodel = require('../model/vendorModel');
const router = express.Router();

// get method

router.get('/', async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    try {
        const totalVendors = await vendormodel.countDocuments();
        const vendorlist = await vendormodel.find().skip(startIndex).limit(limit);
        const paginationInfo = {
            totalPages: Math.ceil(totalVendors / limit),
            totalItems: totalVendors
        };
        res.json({ vendorlist, paginationInfo });
    } catch (error) {
        res.status(500).json({ message: 'Server error' }, err);
    }
})

// get by id method

router.get('/:_id', async (req, res) => {
    const { _id } = req.params;
    const vendor = await vendormodel.findById(_id);
    res.send(vendor)
})

// create method

router.post('/create', async (req, res) => {
    const newVendor = vendormodel(req.body);
    await newVendor.save().catch((err) => {
        res.send({ message: 'Failed to create' }, err)
    });
    res.send(newVendor)
})

// update method

router.put('/update/:_id', async (req, res) => {
    const { _id } = req.params;
    await vendormodel.findByIdAndUpdate(_id, req.body).catch((err) => {
        res.send({ message: 'Failed to update'}, err)
    })
    res.send('Vendor updated successfully')
})

// delete method

router.delete('/delete/:_id', async (req, res) => {
    const { _id } = req.params;
    await vendormodel.findByIdAndDelete(_id).catch((err) => {
        res.send({ message: 'Failed to delete'}, err)
    })
    res.send('Vendor deleted successfully')
})

module.exports = router