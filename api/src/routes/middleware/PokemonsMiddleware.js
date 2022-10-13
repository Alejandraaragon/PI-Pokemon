const {Router} = require("express");
const {getPokemons} = require("../../controllers/getPokemons.js")
const {postPokemons} = require("../../controllers/postPokemons.js")
const router = Router();


router.get("", getPokemons)
router.get("/:id", getPokemons)
router.get("/?name", getPokemons)
router.post("", postPokemons)


module.exports = router;