const { Router } = require('express')

const router = Router()

const userCtrl = require('../controllers/user.controller')

router.get('/:id', userCtrl.getUserInfo)


module.exports = router