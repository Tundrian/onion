const express = require('express')
const router = express.Router()
const memberController = require('../controllers/admin/members.js') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// Member Routes
console.log('member routes')
router.get('/member', memberController.getMembers)
router.get('/member/:id', memberController.getMember)
router.put('/member/:id', memberController.editMember)
router.post('/member', memberController.addMember)

router.delete('/member:id', memberController.deleteMember)

module.exports = router