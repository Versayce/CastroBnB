const express = require('express')
const { Review, User, Spot, ReviewImage, SpotImage, Booking } = require('../../db/models');
const sequelize = require('sequelize');
const { requireAuth } = require('../../utils/auth');
const { Model } = require('sequelize');

const router = express.Router();

router.get('/current', requireAuth, async (req, res) => {
    const Bookings = await Booking.findAll({
        where: {
            userId: req.user.id,
        },
        include: {
            model: Spot,
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'description']
            }
        }
    })
    return res.json(
        {Bookings}
    )
})



module.exports = router;
