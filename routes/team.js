const express = require("express");
const router = express.Router();

let teamArray = [
    {
        id: 1,
        name: "lakers",
    },
    {
        id: 2,
        name: "knicks",
    },
    {
        id: 3,
        name: "nets",
    },
];

router.get("/", function (req, res) {
    res.json({
        data: teamArray,
    });
});

// exporting file
module.exports = router;