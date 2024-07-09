const express = require('express');
const {authenticateToken,authorizeRoles}=require('../middleware/verify')
const { signup, login, logout, refresh ,getUsers} = require('../controller/auth.controller');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh', refresh);
router.get('/users', authenticateToken,  getUsers);
module.exports = router;
 