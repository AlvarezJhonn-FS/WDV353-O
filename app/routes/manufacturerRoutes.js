const express = require('express');
const router = express.Router();

const {
    createManufacturer,
    getManufacturers,
    getManufacturerById,
    deleteManufacturer,
  updateManufacturer
    } = require('../controllers/manufacturerController');

    router.post('/', createManufacturer);
    router.get('/', getManufacturers);
    router.get('/:id', getManufacturerById); 
    router.put('/:id', updateManufacturer);

    module.exports = router;