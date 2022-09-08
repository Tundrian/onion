const express = require('express')
const router = express.Router()
const memberController = require('../controllers/admin/members.js') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// Member Routes
router.get('/member', memberController.getMembers)
router.get('/member/:id', memberController.getMember)
router.post('/member', memberController.addMember)
router.put('/member/:id', memberController.editMember)
router.delete('/member:id', memberController.deleteMember)

module.exports = router