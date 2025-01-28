const Manufacturer = require('../models/manufacturer');
const Car = require('../models/Cars');

const createManufacturer = async (req, res) => {
  console.log(req.body);
  const { manufacturer } = req.body;

  //connecting the manufacturer to the car
  const car = await Car.findById(manufacturer.car);
  manufacturer.car = car;
  const manufacturerData = new Manufacturer(manufacturer);
  car.manufacturer.push(manufacturerData._id);
  const query = [manufacturerData.save(), car.save()];
  await Promise.all(query);
//end of connection

  const newManufacturer = await Manufacturer.create(manufacturer);
  res.status(200).json({ data: newManufacturer, message: `${req.method} - REQUEST MADE` });
};

const getManufacturerById = async (req, res) => {
  try {
    const manufacturer = await Manufacturer.findById(req.params.id);
    if (!manufacturer) {
      res.status(404).json({ success: false, message: "Manufacturer not found" });
    }
    res.status(200).json({ data: manufacturer, success: true, message: `${req.method} - REQUEST MADE` });
  } catch (error) {
    res.status(404).json({ success: false, message: "Manufacturer not found" });
  }
};

const getManufacturers = async (req, res) => {
  try {
    const manufacturers = await Manufacturer.find({});
    if (!manufacturers) {
      res.status(404).json({ success: false, message: "No manufacturers saved" });
    }
    res.status(200).json({ data: manufacturers, success: true, message: `${req.method} - REQUEST MADE` });
  } catch (error) {
    res.status(404).json({ success: false, message: "No manufacturers saved" });
  }
};

const updateManufacturer = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body.manufacturer;

    const updatedManufacturer = await Manufacturer.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedManufacturer) {
      return res.status(404).json({ success: false, message: 'Manufacturer not found' });
    }
    res.status(200).json({ data: updatedManufacturer, success: true, message: 'Manufacturer updated successfully' });
  } catch (error) {
    res.status(404).json({ success: false, message: "No manufacturers saved" });
  }
};

const deleteManufacturer = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedManufacturer = await Manufacturer.findByIdAndDelete(id);

    if (!deletedManufacturer) {
      return res.status(404).json({ success: false, message: "Manufacturer not found" });
    }

    res.status(200).json({
      data: deletedManufacturer,
      success: true,
      message: `${req.method} - REQUEST MADE`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: `Error occurred while deleting manufacturer: ${error.message}`,
    });
  }
};

module.exports = { createManufacturer, getManufacturerById, getManufacturers, updateManufacturer, deleteManufacturer };
