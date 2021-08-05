const User = require('../models/User')
const router = require('express').Router()

router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    if (!users) {
      return res.json({
        error: 'Error to find users'
      })
    }

    return res.json({ users })
  } catch (err) {
    return res.json({ error: err.message || 'Server error' })
  }
})

module.exports = router
