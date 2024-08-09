const router = require('express').Router();
const userController= require('../controllers/userController')
const authorize = require('../middlewares/authMiddleware')


router.post('/',userController.createUser)
router.post('/login',userController.login)
router.get('/',authorize('admin'),userController.getAllUsers)

module.exports= router;