const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const PokemonsMiddleware = require("./middleware/PokemonsMiddleware")
const TypesMiddleware= require("./middleware/TypesMiddleware")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", PokemonsMiddleware);
router.use("/types", TypesMiddleware)

module.exports = router;
