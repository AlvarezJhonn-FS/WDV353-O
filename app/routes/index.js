const express = require("express");
const router = express.Router();


//localhost:3000/api/
router.get("/", (req, res) => {
    res.status(200).json({
        message: "GET - root",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

//localhost:3000/api/anything
router.get("/:id/45", (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: "GET by ID IS WORKING",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
            
        },
    });
});

//localhost:3000/api/anything to put
router.put("/:id/89", (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: "PUT BY ID IS WORKING",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

//localhost:3000/api/anything to post
router.post("/:id", (req, res) => {
    const { id } = req.body;
    res.status(200).json({
        message: "POST BY ID IS WORKING",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

//localhost:3000/api/anything to delete
router.delete("/:id/9", (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: "DELETE METHOD IS WORKING",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

module.exports = router;