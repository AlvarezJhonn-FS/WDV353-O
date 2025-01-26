const Car = require('../models/Cars');


const createCar = async (req, res) => {
    console.log(req.body);
    const {car} = req.body;
    const newCar = await Car.create(car);
    res.status(200).json({ data: newCar, message: `${req.method} - REQUEST MADE` });
  };

  const getCarId = async (req, res) => {
    const car = await Car.findById(req.params.id);
    res.status(200).json({ "data": car, success: true, message: `${req.method} - REQUEST MADE` });

  };

  const getCar = async (req, res) => {   
    const car = await Car.find({});
    res.status(200).json({"data": car, success: true, message: `${req.method} - REQUEST MADE` });
  };

  const putCar = async (req, res) => {
    const { id } = req.params;
    const updates = req.body.car;

    const updatedCar = await Car.findByIdAndUpdate(id, updates, { new: true });

    res.status(200).json({
        "data": updatedCar,
        success: true,
        message: "Car updated successfully",
    });
};

const deleteCar = async (req, res) => { 
    const {id} = req.params;
    const deleteCar = await Car.findByIdAndDelete( req.params.id);
    res.status(200).json({ 'data': deleteCar, success: true, message: `${req.method} - REQUEST MADE` });
  };

  module.exports = {createCar, getCarId, getCar, putCar, deleteCar};