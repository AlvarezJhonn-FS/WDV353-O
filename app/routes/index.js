const express = require('express');
const router = express.Router();
const carRoutes = require('./carRoutes');

router.get('/', (req, res) => {
  res.status(200).json({ success: true, message: `${req.method} - REQUEST MADE` });
});

router.use('/cars', carRoutes);

module.exports = router;