const express = require('express')
const router = express.Router()

router.get('/login',(req,res)=>{
    res.send('working auth ')
})

router.route ('/dashboard',(req,res)=>{
    res.send('working dashboard ')
})

module.exports = router