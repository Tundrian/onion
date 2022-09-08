module.exports = {
  getAdminDashboard: (req, res)=>{
   res.render('adminDashboard.ejs')
  },
  getAdminMembers: (req, res)=>{
    res.render('admin/member/memberIndex.ejs') 
  },
  getAdminMembersAdd: (req, res)=>{
    res.render('admin/member/memberAdd.ejs')
  }
}