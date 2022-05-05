
const Reader = require('../utils/Reader');
const ExplorerService = require('../services/ExplorerService');

class ExplorerController {

    static getExplorersByMission (mission) {

        const explorers = Reader.readJSONFile('explorers.json');
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission;

    }

    static getExplorersUsernamesByMission (mission) {

        const explorers = Reader.readJSONFile('explorers.json');
        const explorersUsernames = ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        return explorersUsernames;

    }

    static getExplorersAmonutByMission (mission) {

        const explorers = Reader.readJSONFile('explorers.json');
        const quantityOfExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return quantityOfExplorers;

    }

}

module.exports = ExplorerController;
