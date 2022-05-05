// Se importa el modulo FileSystem para manipular un archivo
const fs = require("fs");

class Reader {

    
    static readJSONFile(path) {

        // Obtenemos los datos del archivo
        let data = fs.readFileSync(path);

        // Retornamos los datos en formato JSON
        return JSON.parse(data);

    }

}

module.exports = Reader;