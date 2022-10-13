const {Pokemon, Type} = require("../db");

const postPokemons = async (req, res) => {//1. nos llega info del usuario por body
    try {
        const { name, 
                hpoints, 
                attack, 
                defense, 
                speed, 
                height, 
                weight,
                image, 
                type } = req.body;

    let newPokemon = await Pokemon.create({//creamos el pokemon con la info que nos llega y las casillas que nos da la api
        
                name, 
                hpoints, 
                attack, 
                defense, 
                speed, 
                height, 
                weight,
                image

        
    })
    let pokeTypes = await Type.findAll({// buscar en el modelo Type el type quie tiene mi pokemon, el cual envié en el body
        where: {//donde el nombre de ese modelo sea igual al type
            name: type
        }
    })
    
    await newPokemon.addType(pokeTypes);//adherimos el nuevo pokemon al typo 
    return res.status(201).send("Pokemon created")//imprime el pokemon creado
    } catch (error) {
    return res.status(400).send("Error, Pokemon not created")
        
    }
    
}


module.exports = {postPokemons};
