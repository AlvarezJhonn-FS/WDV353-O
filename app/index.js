const express = require("express");
const app = express();
const router = require("./routes");


app.use(express.json());
//localhost:3000/
app.get("/api", (req, res) => {
    res.status(200).json({
        message: "GET - root",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});
app.use("/api/v1", router);
module.exports = app;