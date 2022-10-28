const express = require('express')
const url = require('url');
const sequelize = require('sequelize')
const { Spot, User, SpotImage, Review } = require('../../db/models');
const review = require('../../db/models/review');
const spot = require('../../db/models/spot');
const { setPriority } = require('os');
const { requireAuth } = require('../../utils/auth')

const router = express.Router();


router.get('/', async (req, res) => {
    const spots = await Spot.findAll({
        include: [
            {model: Review},
            {model: SpotImage}
        ] 
    });
    //console.log("og spots: ", spots)
    let spotList = [];
    spots.forEach(spot => {
        //console.log('New Spots: ', spot.toJSON())
        spotList.push(spot.toJSON())
    })
    let starCount = 0;
    let numRev = 0;

    spotList.forEach(spot => {
        spot.Reviews.forEach(review => {
            //console.log(review.stars)
            if(review) {
                //console.log(review)
                numRev += 1;
                starCount += review.stars;
                spot.avgRating = starCount/numRev;
            }
        })

        spot.SpotImages.forEach(image => {
            if(!image) {}
            if(image.preview === true) {
                spot.previewImage = image.url
            }
        })

        if(spot.avgRating === undefined) spot.avgRating = null;
        if(spot.SpotImages.length === 0) spot.previewImage = null;
        delete spot.Reviews;
        delete spot.SpotImages;
    })
    return res.json({
        spotList,
    })
})

router.post('/', requireAuth, async (req, res) => {
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
    res.status(201)
    return res.json(spot)
})

router.get('/current', requireAuth, async (req, res, next) => {
    console.log(req.user)
    const spots = await Spot.findAll({
        where: { ownerId: req.user.id },
        include: [
            {
                model: Review
            },
            {
                model: SpotImage,
                attributes: ['id', 'url', 'preview']
            }
        ]
            
    })
    let spotList = [];
    spots.forEach(spot => {
        //console.log('New Spots: ', spot.toJSON())
        spotList.push(spot.toJSON())
    })
    let starCount = 0;
    let numRev = 0;
    spotList.forEach(spot => {
        spot.SpotImages.forEach(image => {
            if(!image) {}
            if(image.preview === true) {
                spot.previewImage = image.url
            }
        })
        spot.Reviews.forEach(review => {
            //console.log(review.stars)
            if(review) {
                //console.log(review)
                numRev += 1;
                starCount += review.stars;
                spot.avgRating = starCount/numRev;
            }
        })
        if(spot.SpotImages.length === 0) spot.previewImage = null;
        delete spot.SpotImages;
        if(spot.avgRating === undefined) spot.avgRating = null;
        delete spot.Reviews;
    })
    return res.json({
        spotList,
    })
})


router.get('/:spotId', async (req, res, next) => {
    const { spotId } = req.params;
    const spot = await Spot.findOne({
        where: { id: spotId },
        include:[
            {
                model: SpotImage,
                attributes: ['id', 'url', 'preview']
            },
            {
                model: User,
                as: "Owner",
                attributes: ['id', 'firstName', 'lastName']
            },
        ],
    })

    if (!spot) {
        return res.status(404).json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }
    let newSpot = spot.toJSON();
    newSpot.numReviews = await Review.count({
        where: {
            spotId: spotId
        }
    })
    const reviews = await Review.findAll({
        where: {
            spotId: spotId
        }
    })
    
    let starCount = 0;
    let numRev = 0;
    reviews.forEach(review => {
        const newReview = review.toJSON();
        // console.log(newReview.stars)
        starCount += newReview.stars
        numRev += 1
    });
    // console.log(starCount)
    // console.log('numrev: ', numRev)
    newSpot.avgStarRating = starCount/numRev
    newSpot.const
    return res.json(
        newSpot,
    )
})

router.post('/:spotId/images', requireAuth, async (req, res) => {
    const makeSpotImage = await SpotImage.create({
        "url": req.body.url,
        "preview": req.body.preview,
        "spotId": req.params.spotId,
    })
    const spotImage = await SpotImage.findOne({
        where: { spotId: req.params.spotId},
        attributes: { exclude: ['spotId', 'createdAt', 'updatedAt'] },
        order: [['id', 'DESC']]
    })

    const spot = await Spot.findByPk(req.params.spotId)
    if (!spot) {
        return res.status(404).json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }
    return res.json(
        spotImage
    )
})

router.put('/:spotId', requireAuth, async (req, res) => {
    const spot = await Spot.findByPk(req.params.spotId)
    if (!spot) {
        return res.status(404).json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }
    
    spot.address = req.body.address
    spot.city = req.body.city
    spot.state = req.body.state
    spot.country = req.body.country
    spot.lat = req.body.lat
    spot.lng = req.body.lng
    spot.name = req.body.name
    spot.description = req.body.description
    spot.price = req.body.price

    return res.json(spot);
})

router.delete('/:spotId', requireAuth, async (req, res) => {
    const {spotId} = req.params
    const spot = await Spot.findOne({
        where: {
            id: spotId
        }
    })
    if (!spot) {
        return res.status(404).json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }

    await Spot.destroy({
        where: {
            id: spotId
        }
    })
    return res.status(200).json({
        message: "Successfully deleted",
        statusCode: 200
    })
})

module.exports = router;
