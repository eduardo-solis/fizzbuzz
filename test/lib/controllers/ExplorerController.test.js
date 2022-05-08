
const ExplorerController = require("../../../lib/controllers/ExplorerController");

describe("Unit Test for ExplorerController class", () => {

    test("Test 1.- Get a list of explorer by mission", () => {

        const explorers = ExplorerController.getExplorersByMission("node");
        expect(explorers).not.toHaveLength(0);

    });

    test("Test 2.- Validation to get a list of explorers by mission", () => {

        const explorers = ExplorerController.getExplorersByMission("nodes");
        expect(explorers.error).toMatch(/no existen explorers con esta mision/);

    });

    test("Test 3.- Get a list of explorer's usernames by mission", () => {

        const explorersUsernames = ExplorerController.getExplorersUsernamesByMission("node");
        //console.log(explorersUsernames)
        expect(explorersUsernames).not.toHaveLength(0);

    });

    test("Test 4.- Validation to get a list of explorer's usernames by mission", () => {

        const explorersUsernames = ExplorerController.getExplorersUsernamesByMission("nodes");
        //console.log(explorersUsernames)
        expect(explorersUsernames.error).toMatch(/no existen explorers con esta mision/);

    });

    test("Test 5.- Get the quantity of explorers by mission", () => {

        const quantityOfExplorers = ExplorerController.getExplorersAmonutByMission("node");
        expect(typeof (quantityOfExplorers)).toBe( typeof (0) );

    });

    test("Test 6.- Validation to get the quantity of explorers by mission", () => {

        const quantityOfExplorers = ExplorerController.getExplorersAmonutByMission("nodes");
        expect(quantityOfExplorers.error).toMatch(/no existen explorers con esta mision/);

    });

    test("Test 7.- Apply validation in number\n First case: return number", () => {
        
        const result =  ExplorerController.applyValidationInNumber(1);
        expect(result).toBe(1);

    });

    test("Test 8.- Apply validation in number\n Second case: return \"FIZZ\"", () => {
        
        const result =  ExplorerController.applyValidationInNumber(3);
        expect(result).toBe("FIZZ");

    });

    test("Test 9.- Apply validation in number\n Third case: return \"BUZZ\"", () => {
        
        const result =  ExplorerController.applyValidationInNumber(5);
        expect(result).toBe("BUZZ");

    });

    test("Test 10.- Apply validation in number\n Fourth case: return \"FIZZBUZZ\"", () => {
        
        const result =  ExplorerController.applyValidationInNumber(15);
        expect(result).toBe("FIZZBUZZ");

    });

    test("Test 11.- Get explorer's usernames by mission in one string", () => {

        const usernames = ExplorerController.getExplorersUsernamesByMissionInString("node");
        expect(typeof(usernames)).toBe("string");
        
    });

});

