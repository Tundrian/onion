const Member = require('../../models/Member')
const asyncHandler = require('express-async-handler')

const getMembers = asyncHandler(async (req, res) => {
  try{
    const allMembers = await Member.find()
    console.log('controller: ', allMembers)
    if(res){
      res.status(200).json(allMembers)
    }else{
      return allMembers
    }
   
  } catch (err){
    throw new Error(err)
  }
 })

 const getMember = asyncHandler(async (req, res) => {
  try{
    const member = await Member.findOne({_id: req.params.id})
    res.status(200).json(member)
  } catch (err){
    throw new Error(err)
  }
 })

 const addMember = asyncHandler(async (req, res) => {
  console.log(req.body)
  try{
    const member = await Member.create(req.body)
    // res.status(200).json(member)
    res.redirect('/admin/members')
  } catch (err){
    throw new Error(err)
  }
 })

 const editMember = asyncHandler(async (req, res) => {
  try{
    const member = await Member.findOne({_id: req.params.id})
    if(!member){
      res.status(400)
      throw new Error('Member not found')
    }
    const updatedMember = await Member.findOneAndUpdate({ _id: req.params.id}, req.body)
    res.status(200).json(updatedMember)
  } catch (err){
    throw new Error(err)
  }
 })

 const deleteMember = asyncHandler(async (req, res) => {
  const member = await Member.findOne({_id: req.params.id})
  if(!member){
      res.status(400)
      throw new Error('Member not found')
  }

  await Member.findOneAndDelete({ _id: req.params.id})

  res.status(200).json({id: req.params.id})
})

 module.exports = {
  getMembers,
  getMember,
  addMember,
  editMember,
  deleteMember
 }