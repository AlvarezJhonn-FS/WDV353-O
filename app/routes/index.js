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
router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: "GET by ID for api/",
        metadata: {
            hostname: req.hostname,
            method: req.method,
            id: id,
        },
    });
});

//localhost:3000/api/anything to put
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    res.status(200).json({
        message: "PUT by ID for api/",
        metadata: {
            hostname: req.hostname,
            method: req.method,
            id: id,
            data: data,
        },
    });
});

//localhost:3000/api/anything to post
router.post("/:id", (req, res) => {
    const {data} = req.body;
    res.status(200).json({
        message: "POST to api by id/",
        data,
        metadata: {
            hostname: req.hostname,
            method: req.method,
            data: data,
        },
    });
});

//localhost:3000/api/anything to delete
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: "Item deleted",
        metadata: {
            hostname: req.hostname,
            method: req.method,
            id: id,
        },
    });
});

module.exports = router;