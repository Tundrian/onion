const memberController = require('../controllers/admin/members.js') 
const asyncHandler = require('express-async-handler')

module.exports = {
  getAdminDashboard: (req, res)=>{
   res.render('adminDashboard.ejs')
  },
  getAdminMembers: asyncHandler(async (req, res)=>{
    const members = await memberController.getMembers()
    res.render('admin/member/memberIndex.ejs', { members: members}) 
  }),
  getAdminMembersAdd: (req, res)=>{
    res.render('admin/member/memberAdd.ejs')
  }
}