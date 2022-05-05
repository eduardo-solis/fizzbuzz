
const ExplorerController = require('../../../lib/controllers/ExplorerController');

describe('Unit Test for ExplorerController class', () => {

    test('Test 1.- Get a list of explorer by mission', () => {

        const explorers = ExplorerController.getExplorersByMission('node');
        expect(explorers).not.toHaveLength(0);

    });

    test('Test 2.- Validation to get a list of explorers by mission', () => {

        const explorers = ExplorerController.getExplorersByMission('nodes');
        expect(explorers.error).toMatch(/no existen explorers con esta mision/);

    });

})
