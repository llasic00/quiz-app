const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser } = require('../controllers/authController');

router.use(
    cors({
        credentials: true,
        origin: ['http://localhost:5173', 'http://localhost:5174']
    })
)

router.get('/', test)
router.post('/register', registerUser)

module.exports = router
