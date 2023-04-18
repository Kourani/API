
const express = require('express')
const router = express.Router();



router.get('/', async (req, res) => {

    await Spot.findAll()
} )


module.exports = router;
