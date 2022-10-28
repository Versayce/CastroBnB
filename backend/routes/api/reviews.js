const express = require('express')
const { Review, User, Spot, ReviewImage } = require('../../db/models');
const sequelize = require('sequelize');
const { requireAuth } = require('../../utils/auth');
const user = require('../../db/models/user');


const router = express.Router();


router.get('/current', requireAuth, async (req, res) => {
    const reviews = Review.findAll({
        where: { id: req.user.id }
    })
    return res.json(
        reviews
    )
})


router.post('/:reviewId/images', async (req, res) => {
    console.log(req.params.reviewId)
    const newImage = await ReviewImage.create({
        "url": req.body.url,
        "reviewId": req.params.reviewId
    })

    const trimmedImage = await ReviewImage.findOne({
        where: { id: req.params.reviewId },
        attributes: { exclude: ['reviewId', 'createdAt', 'updatedAt'] },
        //order: [['id', 'DESC']]
    })

    // const reviewExists = await Review.findByPk(req.params.reviewId)
    // if(!reviewExists) {
    //     return res.status(404).json({
    //         message: "Review couldn't be found",
    //         statusCode: 404
    //     })
    // }
    
    return res.json(
        trimmedImage
    )
})




module.exports = router;
