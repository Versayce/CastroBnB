const express = require('express')
const { Review, User, Spot, ReviewImage, SpotImage } = require('../../db/models');
const sequelize = require('sequelize');
const { requireAuth } = require('../../utils/auth');
const { Model } = require('sequelize');

const router = express.Router();



module.exports = router;
