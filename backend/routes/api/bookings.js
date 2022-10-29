const express = require('express')
const { Review, User, Spot, ReviewImage, SpotImage, Booking } = require('../../db/models');
const sequelize = require('sequelize');
const { requireAuth } = require('../../utils/auth');
const { Model, DATE } = require('sequelize');

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


router.put('/:bookingId', requireAuth, async (req, res) => {
    const now = new Date();
    timeNow = now.getTime();
    //console.log(timeNow)
    const booking = await Booking.findByPk(req.params.bookingId);
    if(!booking){
        return res.status(404).json({
            message: "Booking couldn't be found",
            statusCode: 404
        })
    }
    if(booking.endDate < timeNow){
        return res.status(403).json({
            message: "Past bookings can't be modified",
            statusCode: 403
        })
    }
    if(req.body.startDate > req.body.endDate) {
        return res.status(400).json({
            message: "Validation error",
            statusCode: 400,
            errors: {
                endDate: "endDate cannot come before startDate"
            }
        })
    }
    jsonBooking = booking.toJSON();
    const bookingSpotId = jsonBooking.spotId
    const allSpotBookings = await Booking.findAll({
        where: { spotId: bookingSpotId }
    })

    
    deconReqStartDate = req.body.startDate.split("-")
    const reqStartDate = new Date(deconReqStartDate).getTime();
    deconReqEndDate = req.body.endDate.split("-")
    const reqEndDate = new Date(deconReqEndDate).getTime();

    const filteredBookings = allSpotBookings.filter(booking => {
        const objBooking = booking.toJSON();
        //console.log('json booking: ', objBooking);
        const bookingStartTime = booking.startDate.getTime();
        const bookingEndTime = booking.endDate.getTime();
        //console.log(`reqstartdate ${reqStartDate}, reqenddate ${reqEndDate}, bookingstarttime ${bookingStartTime}, bookingendtime ${bookingEndTime}`)

        return (reqStartDate >= bookingStartTime && reqStartDate <= bookingEndTime || reqEndDate >= bookingStartTime && reqEndDate <= bookingEndTime )  //create conditions for if booking timeline is around existing booking later
    })

    if(filteredBookings.length > 0){
        return res.status(403).json({
            message: "Sorry, this spot is already booked for the specified dates",
            statusCode: 403,
            errors: {
                startDate: "Start date conflicts with an existing booking",
                endDate: "End date conflicts with an existing booking"
            }
        })
    }

    booking.startDate = req.body.startDate
    booking.endDate = req.body.endDate
    await booking.save();

    return res.json(
        booking
    )
})

module.exports = router;
