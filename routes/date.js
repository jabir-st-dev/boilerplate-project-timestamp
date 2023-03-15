const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    const currentDate = Date.now();

    const date = new Date(currentDate);

    const utc = date.toUTCString();

    // console.log(typeof (currentDate));

    res.send({
        unix: currentDate,
        utc
    })
});
router.get("/:date", function (req, res) {
    var givenDate;

    if (isNaN(req.params.date)) givenDate = req.params.date;
    else givenDate = parseInt(req.params.date);

    // const givenDate = (req.params.date);
    const date = new Date(givenDate);
    // console.log(date.toString());

    if (date.toString() === 'Invalid Date') {
        return res.send({error: "Invalid Date"});
    } else {
        const utc = date.toUTCString();

        // console.log(givenDate);

        return res.send({
            unix: givenDate,
            utc
        });
    }
});

module.exports = router;