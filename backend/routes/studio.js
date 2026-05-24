
const express = require('express');
const router = express.Router();
const { saveCustomGift, getUserCustomGifts } = require('../controllers/studioController');
const { protect } = require('../middleware/authMiddleware');

router.post('/save',           protect, saveCustomGift);
router.get('/user/:userId',    protect, getUserCustomGifts);

module.exports = router;