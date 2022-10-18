
const router = require('express').Router();
const controllermap = require('../controller/firstController');

router.get('/first',controllermap.getPageMethod);
router.get('/second',controllermap.getPageMethod1);
router.get('/dash', controllermap.getDashboard);


// module.exports = router;
module.exports = router;

