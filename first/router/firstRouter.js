
const router = require('express').Router();
const controllermap = require('../controller/firstController');

router.get('/crud',controllermap.getPageMethod);
router.get('/first',controllermap.getRegister);




module.exports = router;

