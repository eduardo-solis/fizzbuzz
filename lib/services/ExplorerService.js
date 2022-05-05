
class ExplorerService {

    static filterByMission(explorers, mission) {

        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);

        if (explorersByMission.length != 0) {

            return explorersByMission;

        }
        else {

            return { error : "no existen explorers con esta mision"};

        }

    }

    static getAmountOfExplorersByMission (explorers, mission) {

        const explorersByMission = this.filterByMission(explorers, mission);

        if ( explorersByMission.error == "no existen explorers con esta mision" ) {
            return { error :  "no existen explorers con esta mision" };
        }
        else {
            return explorersByMission.length;
        }

    }

    static getExplorersUsernamesByMission (explorers, mission) {

        const explorersByMission = this.filterByMission(explorers, mission);

        if ( !explorersByMission.error ) {
            
            const usernames = explorersByMission.map((explorer) => explorer.githubUsername);

            return usernames;

        }
        else {
            return { error : explorersByMission.error };
        }

    }

}

module.exports = ExplorerService;