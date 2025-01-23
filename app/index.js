const express = require("express");
const app = express();


//localhost:3000/
app.get("/", (req, res) => {
    res.status(200).json({ message: "GET - root", metadata: { hostname: req.method, 
    },
});
});

module.exports = app;