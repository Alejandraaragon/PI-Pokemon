const {Router} = require("express");
const {getTypes} = require("../../controllers/getTypes.js");
const router = Router();

router.get( "", getTypes)


module.exports = router;