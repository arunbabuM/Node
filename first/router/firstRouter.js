
const router = require('express').Router();
const controllermap = require('../controller/firstController');

router.get('/crud',controllermap.getPageMethod);
router.get('/first',controllermap.getRegister);
router.get('/login',controllermap.getLogin)
router.post('/dashboard',controllermap.getDashboard);
router.get('/adduser',controllermap.getAddUser);
router.post('/adduser',controllermap.saveAddUser);



module.exports = router;

