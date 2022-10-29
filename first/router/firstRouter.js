
const router = require('express').Router();
const controllermap = require('../controller/firstController');

// router.get('/first',controllermap.getPageMethod);
// router.get('/second',controllermap.getPageMethod1);
// router.post('/dash', controllermap.getDashboard);
router.get('/crud',controllermap.getPageMethod);
// router.post('/crud',controllermap.getCrud);


// module.exports = router;
module.exports = router;

