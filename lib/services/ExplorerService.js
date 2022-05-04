
class ExplorerService {

    static filterByMission(explorers, mission) {

        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);

        if (explorersByMission.length != 0) {

            return explorersByMission

        }
        else {

            return { error : 'no existen explorers con esta mision'}

        }

    }

}

module.exports = ExplorerService