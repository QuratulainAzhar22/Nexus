const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);

// Example of a Protected Route
router.get('/dashboard', authMiddleware, (req, res) => {
    res.json({ msg: `Welcome to the ${req.user.role} dashboard!` });
});

module.exports = router;

const { register, login, getProfile } = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

// Existing routes...
router.get('/profile', authMiddleware, getProfile);

module.exports = router;