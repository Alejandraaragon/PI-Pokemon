const axios = require("axios");
const {Type} = require("../db");


const getTypes = async (_req, res) => {
    try {
    const apiInfo = await axios.get("https://pokeapi.co/api/v2/type");// 1.traemos info de la api
    const infoTypes = await apiInfo.data.results.map(e => e.name);    // 2. tramos la info especifica que necesitamso ---> los tipos

    infoTypes.forEach(e => {                                          // 3. guardamos esa info en la base de datos 
        Type.findOrCreate({
            where: {name: e}
        })
    })

    const allTypes = await Type.findAll();                            //4. llamamos los datos de la base de datos
    res.status(200).send(allTypes);
        
    } catch (error) {
    res.status(404).send(error)
        
    }
}

module.exports = {
    getTypes,
}