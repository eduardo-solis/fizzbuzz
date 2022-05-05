
// Importamos la clase Reader
const Reader = require("./../../../lib/utils/Reader");

describe("Unit Test for Reader class", () => {
    
    test("Test 1.- Get the information from a file", () => {

        const informationFromFile = Reader.readJSONFile("explorers.json");
        //console.log(informationFromFile)

        // Comprobamos que la lista tenga una longitud diferente de 0
        expect(informationFromFile).not.toHaveLength(0);

    });

});

