const axios = require("axios");
const {Pokemon, Type} = require("../db");


   const getPokemons = async (req, res) => {
        const {id} = req.params;
        const {name} = req.query;
        try{


    const getAllInfoApi = async () => {//esta funcion me trae toda la info de la api de Poquemon y la guarda en esta variable getAllInfoApi
        const apiInfo = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40")//guardo en esta constante la obtencion de la info de la api completa
        const pkFilterToArrayUrls = await apiInfo.data.results.map((d) => d.url);//entro al objeto completo: 1-data 2-results y dentro de results hay {name y url} Tomamos las url de cada objetito que hay en results. Nos devuelve un array con urls.
    
        const infoPokemon = await Promise.all(pkFilterToArrayUrls.map(async (d) => {//guardo en esta constante el mapeo al array de urls, recorro cada  elemento de ese array que tengo en pkFilterToArrayUrlsy con el promise.all lo hago de forma sincronica, osea que se renderisen al mismo tiempo
        let infoTotalBypk = await axios.get(d)//a cada elemento (d) en este caso le aplico un AXIOS que es lo que me traerá la info completa de cada url. Cada url es un pokemon. Esta constante guarda la info total por pokemon, por eso --> infoTotalBypk
               return{//de toda la info que me trae de cada pokemon solo quiero lo siguiente:
                        id: infoTotalBypk.data.id,
                        name: infoTotalBypk.data.name, 
                        hpoints: infoTotalBypk.data.stats[0].base_stat, 
                        image: infoTotalBypk.data.sprites.other.dream_world.front_default,
                        attack: infoTotalBypk.data.stats[1].base_stat, 
                        defense: infoTotalBypk.data.stats[2].base_stat, 
                        speed: infoTotalBypk.data.stats[5].base_stat, 
                        height: infoTotalBypk.data.height, 
                        weight: infoTotalBypk.data.weight,
                        types: infoTotalBypk.data.types.map((d) => d.type.name)
                        
                }
         }
         ))
         
      return infoPokemon
    }
   
    const getAllInfoDb = async () => {//esta funcion me trae toda la info de la DATABASE del modelo Poquemon y la guarda en esta variable getAllInfoDb, vinculandola con el modelo Type
     return await Pokemon.findAll({
        include: {
             model: Type,
             attribute: ["name"],
             through: {
                attribute: []
             }
        }
              
     })
    }

    const getPkConcatApi_Db = async () => {// esta funcion me guarda en la variable getPkConcatApi_Db la concatenacion de la info guardada en base de datos y la info que esta en la api
        let allPokeApi = await getAllInfoApi();
        let allPokeDb = await getAllInfoDb();
        let allPokemons = allPokeApi.concat(allPokeDb)
        return allPokemons;
    }
    
    
    const pokInfoTotal= await getPkConcatApi_Db();//aca tengo toda la info que necesito, de la api y de la database
   
    
      if (id) {
         const pokById =  pokInfoTotal.filter(d => d.id == id)
         return res.status(200).send(pokById) 
   }

      else if (name) {
         const pokByName = pokInfoTotal.filter(d => d.name.toLowerCase().includes(name.toLowerCase()))
         return res.status(200).send(pokByName)
   } 

     res.status(200).send(pokInfoTotal)
    }catch (error) {
  
    res.status(404).send(error) 
}


}

module.exports = { getPokemons }

    /* const pokInfoTotal= await getPkConcatApi_Db();//aca tengo toda la info que necesito, de la api y de la database
   
        if (id) {
          const pokemonById =  pokInfoTotal.filter(d => d.id == id)
          pokemonById  
          ? res.status(200).send(pokemonById) 
          : res.status(404).send("the id does not correspond to a pokemon")
       }

       else if (name) {
          const pokemonByName = pokInfoTotal.filter(d => d.name.toLowerCase().includes(name.toLowerCase()))
          pokemonByName
          ? res.status(200).send(pokemonByName) 
          : res.status(404).send("the name does not correspond to a pokemon")
       } 
       else{
         return res.status(200).send(pokInfoTotal)
       }

   }catch (error) {
      res.status(404).send(error) 
   }


 
}

module.exports = { 
   getPokemons, 
     } */