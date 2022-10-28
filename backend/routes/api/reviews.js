const express = require('express')
const { Review, User, Spot, ReviewImage } = require('../../db/models');
const sequelize = require('sequelize')


const router = express.Router();



router.post('/:reviewId/images', async (req, res) => {
    const image = ReviewImage.create({
        "url": req.body.url,
        "reviewId": req.params.reviewId
    })
    
    return res.json(
        image
    )
})




module.exports = router;
