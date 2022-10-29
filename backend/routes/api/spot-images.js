const express = require('express')
const url = require('url');
const sequelize = require('sequelize')
const { Spot, User, SpotImage, Review, Booking, ReviewImage } = require('../../db/models');
const { requireAuth } = require('../../utils/auth')
const router = express.Router();



router.delete('/:imageId', requireAuth, async (req, res) => {
    const { imageId } = req.params
    const image = await SpotImage.findByPk(req.params.imageId)
    //console.log(image.toJSON())
    if (!image) {
        return res.status(404).json({
            message: "Spot Image couldn't be found",
            statusCode: 404
        })
    }

    await SpotImage.destroy({
        where: {
            id: imageId
        }
    })
    return res.status(200).json({
        message: "Successfully deleted",
        statusCode: 200
    })
})


module.exports = router;
