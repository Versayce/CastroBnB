const express = require('express')
const url = require('url');
const { Spot, User, SpotImage } = require('../../db/models');


const router = express.Router();


router.get('/', async (req, res) => {
    const spots = await Spot.findAll();

    return res.json({
        spots,
    })
})

router.post('/', async (req, res) => {
    const spot = await Spot.create({
        "address": req.body.address,
        "city": req.body.city,
        "state": req.body.state,
        "country": req.body.country,
        "lat": req.body.lat,
        "lng": req.body.lng,
        "name": req.body.name,
        "description": req.body.description,
        "price": req.body.price,
        "ownerId": req.user.id
    });
    return res.json({
        spot,
    })
})

router.get('/current', async (req, res) => {
    const { id } = req.user
    const spots = await Spot.findAll({
        where: {
            ownerId: id
        }
    })
    return res.json({
        spots,
    })
})

router.get('/:spotId', async (req, res) => {
    
})

router.post('/:spotId/images', async (req, res) => {
    spotImage = await SpotImage.create({
        "url": req.body.url,
        "preview": req.body.preview,
        "spotId": req.query.spotId
    })
    return res.json({
        spotImage
    })
})

module.exports = router;
