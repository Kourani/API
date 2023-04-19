
const express = require('express')
const router = express.Router();



router.get('/', async (req, res) => {

    console.log('inside')
    await Spot.findAll()
} )


module.exports = router;
