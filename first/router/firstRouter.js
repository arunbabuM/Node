const router = require('express').Router();
const controllermap = require('../controller/firstController');

router.get('first',controllermap.getPageMethod);


// module.exports = router;
module.exports = router;
