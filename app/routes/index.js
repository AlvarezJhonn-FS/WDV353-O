const express = require("express");
const router = express.Router();

const storedData = [];

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
router.get("/:id", (req, res) => {
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

// POST data by ID
// Route: localhost:3000/api/:id
router.post("/", (req, res) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const { data } = req.body;

    const newItem = { id, data };
    storedData.push(newItem);

    res.status(200).json({
        message: "POST by ID is working",
        data: newItem,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

// PUT data by ID (Update)
// Route: localhost:3000/api/:id
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { newId } = req.body;

    const itemIndex = storedData.findIndex((data) => data.id === id);

    if (itemIndex === -1) {
        return res.status(404).json({
            message: "Item not found",
            metadata: {
                hostname: req.hostname,
                method: req.method,
            },
        });
    }

    storedData[itemIndex].id = newId;

    res.status(200).json({
        message: "PUT by ID is working",
        data: storedData[itemIndex],
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

// DELETE data by ID
// Route: localhost:3000/api/:id
router.delete("/:id", (req, res) => {
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
