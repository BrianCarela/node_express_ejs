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
  console.log(req.query);
  let foundTeam;
  if (req.query.name) {
    teamArray.forEach((team) => {
      if (team.name === req.query.name) {
        foundTeam = team;
      }
    });
    res.json({
      data: foundTeam,
    });
  } else {
    res.json({
      data: teamArray,
    });
  }
});

//exporting file
module.exports = router;