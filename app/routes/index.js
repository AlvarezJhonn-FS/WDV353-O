const express = require("express");
const router = express.Router();

const storedData = [];


// Route: localhost:3000/api/v1/
router.post("/", (req, res) => {
    const { data } = req.body;
    const randomId = Math.floor(Math.random() * 10000) + 1;
    const newItem = { id: randomId, data };

    storedData.push(newItem); 

    res.status(201).json({
        message: "POST to API is working",
        data: newItem,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});


// GET all data
// Route: localhost:3000/api/
router.get("/", (req, res) => {
    res.status(200).json({
        message: "GET to API is working",
        data: storedData, 
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

// GET data by ID
// Route: localhost:3000/api/:id
router.get("/:id/45", (req, res) => {
    const { id } = req.params;
    const item = storedData.find((data) => data.id === parseInt(id, 10));

    if (!item) {
        return res.status(404).json({
            message: "Item not found",
            metadata: {
                hostname: req.hostname,
                method: req.method,
            },
        });
    }

    res.status(200).json({
        message: "GET by ID is working",
        data: item,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});


// PUT data by ID (Update)
// Route: localhost:3000/api/:id
router.put("/:id/89", (req, res) => {
    const { id } = req.params;
    const updates = req.body; // Accept all update fields from request body

    const itemIndex = storedData.findIndex((item) => item.id === parseInt(id, 10));

    if (itemIndex === -1) {
        return res.status(404).json({
            message: "Item not found",
            metadata: {
                hostname: req.hostname,
                method: req.method,
            },
        });
    }

    Object.assign(storedData[itemIndex], updates);

    res.status(200).json({
        message: "Item Updated",
        data: storedData[itemIndex],
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});


// DELETE data by ID
// Route: localhost:3000/api/:id
router.delete("/:id/9", (req, res) => {
    const { id } = req.params;

    const itemIndex = storedData.findIndex((data) => data.id === id);
    const deletedItem = storedData.splice(itemIndex, 1);

    res.status(200).json({
        message: "DELETE by ID is working",
        data: deletedItem,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

module.exports = router;
