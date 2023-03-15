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
    if (isNaN(req.params.date)) {
        res.send({error: "Invalid Date"});
    } else {
        const givenDate = parseInt(req.params.date);

        // const givenDate = (req.params.date);
        const date = new Date(givenDate);

        const utc = date.toUTCString();

        // console.log(givenDate);

        res.send({
            unix: givenDate,
            utc
        });
    }
});

module.exports = router;