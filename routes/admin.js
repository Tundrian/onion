const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// Nav Routes
router.get('/', adminController.getAdminDashboard)
router.get('/members', adminController.getAdminMembers)
router.get('/memberAdd', adminController.getAdminMembersAdd)
module.exports = router