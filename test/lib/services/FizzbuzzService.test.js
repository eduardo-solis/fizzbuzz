
const Reader = require("../../../lib/utils/Reader");
const ExplorerService = require("../../../lib/services/ExplorerService");

const FizzbuzzService = require("../../../lib/services/FizzbuzzService");

describe("Unit Test for FizzbuzzService class", () => {

    test("Test 1.- Apply validation in explorer \nFirst case: atribute trick = score", () => {

        // Obtenermos los datos en formato JSON
        const explorers = Reader.readJSONFile("explorers.json");

        // Obteniendo una lista filtrada por mision
        const explorersByMission = ExplorerService.filterByMission(explorers, "node");

        const explorerWithValidation = FizzbuzzService.applyValidationInExplorer(explorersByMission[0]);

        expect(explorerWithValidation.trick).toBe(1);

    });

    test("Test 2.- Apply validation in explorer \nSecond case: atribute trick = FIZZ", () => {

        // Obtenermos los datos en formato JSON
        const explorers = Reader.readJSONFile("explorers.json");

        // Obteniendo una lista filtrada por mision
        const explorersByMission = ExplorerService.filterByMission(explorers, "node");

        const explorerWithValidation = FizzbuzzService.applyValidationInExplorer(explorersByMission[2]);

        expect(explorerWithValidation.trick).toBe("FIZZ");

    });

    test("Test 4.- Apply validation in explorer \nFourth case: atribute trick = FIZZBUZZ", () => {

        // Obtenermos los datos en formato JSON 
        const explorers = Reader.readJSONFile("explorers.json");

        // Obteniendo una lista filtrada por mision
        const explorersByMission = ExplorerService.filterByMission(explorers, "node");

        const explorerWithValidation = FizzbuzzService.applyValidationInExplorer(explorersByMission[9]);

        expect(explorerWithValidation.trick).toBe("FIZZBUZZ");

    });

    test("Test 5.- Apply validation in number\n First case: return number", () => {
        
        const result =  FizzbuzzService.applyValidationInNumber(1);
        expect(result).toBe(1);

    });

    test("Test 6.- Apply validation in number\n Second case: return \"FIZZ\"", () => {
        
        const result =  FizzbuzzService.applyValidationInNumber(3);
        expect(result).toBe("FIZZ");

    });

    test("Test 7.- Apply validation in number\n Third case: return \"BUZZ\"", () => {
        
        const result =  FizzbuzzService.applyValidationInNumber(5);
        expect(result).toBe("BUZZ");

    });

    test("Test 8.- Apply validation in number\n Fourth case: return \"FIZZBUZZ\"", () => {
        
        const result =  FizzbuzzService.applyValidationInNumber(15);
        expect(result).toBe("FIZZBUZZ");

    });

});
