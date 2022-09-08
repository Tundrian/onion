const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
  userId: {
    type: String
  },
  memberNumber: {
    type: String
  },
})

module.exports = mongoose.model('Member', MemberSchema)
