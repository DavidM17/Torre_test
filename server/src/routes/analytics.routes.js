const { Router } = require('express') 

const router = Router()

const analyticsCtrl = require('../controllers/analytics.controller')

router.get('/salary/:id',analyticsCtrl.getAnalyticsSalary)


module.exports = router