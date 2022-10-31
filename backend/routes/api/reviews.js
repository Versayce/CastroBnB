const express = require('express')
const { Review, User, Spot, ReviewImage, SpotImage } = require('../../db/models');
const sequelize = require('sequelize');
const { requireAuth } = require('../../utils/auth');
const { Model } = require('sequelize');


const router = express.Router();


router.get('/current', requireAuth, async (req, res) => {
    const reviews = await Review.findAll({
        where: { userId: req.user.id },
        include: [
            {
                model: User
            },
            {
                model: Spot,
                attributes: {exclude: ['createdAt', 'updatedAt'] }
            },
            {
                model: ReviewImage,
                attributes: {exclude: ['reviewId', 'createdAt', 'updatedAt'] }
            }
        ]
    })

    return res.json(
        {"Reviews": reviews}
    )
})


router.post('/:reviewId/images', async (req, res) => {
    console.log(req.params.reviewId)
    const newImage = await ReviewImage.create({
        "url": req.body.url,
        "reviewId": req.params.reviewId
    })

    const trimmedImage = await ReviewImage.findOne({
        where: { reviewId: req.params.reviewId },
        attributes: { exclude: ['reviewId', 'createdAt', 'updatedAt'] },
        order: [['id', 'DESC']]
    })

    const reviewExists = await Review.findByPk(req.params.reviewId)
    if(!reviewExists) {
        return res.status(404).json({
            message: "Review couldn't be found",
            statusCode: 404
        })
    }
    
    return res.json(
        trimmedImage
    )
})



router.put('/:reviewId', requireAuth, async (req, res) => {
    const review = await Review.findByPk(req.params.reviewId)
    if (!review) {
        return res.status(404).json({
            message: "Review couldn't be found",
            statusCode: 404
        })
    }
  
    review.review = req.body.review
    review.stars = req.body.stars
    await review.save();
    return res.json(review);
})

router.delete('/:reviewId', requireAuth, async (req, res) => {
    const { reviewId } = req.params
    const review = await Review.findByPk(reviewId)
    //console.log(image.toJSON())
    if (!review) {
        return res.status(404).json({
            message: "Review couldn't be found",
            statusCode: 404
        })
    }

    await Review.destroy({
        where: {
            id: reviewId
        }
    })
    return res.status(200).json({
        message: "Successfully deleted",
        statusCode: 200
    })
})

module.exports = router;
