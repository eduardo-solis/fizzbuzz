const Express = require("express");
const ExplorerController = require("../lib/controllers/ExplorerController");

const app = Express();
const port = 3000;

app.use(Express.json());

app.get("/", (req, res) => {
    res.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (req, res) => {

    const explorersByMission = ExplorerController.getExplorersByMission(req.params.mission);
    res.json(explorersByMission);

});

app.get("/v1/explorers/amount/:mission", (req, res) => {

    const mission = req.params.mission;
    const quantityOfExplorersByMission = ExplorerController.getExplorersAmonutByMission(mission);
    res.json({ mission : mission, quantity : quantityOfExplorersByMission });

});

app.get("/v1/explorers/usernames/:mission", (req, res) => {

    const mission = req.params.mission;
    const explorersUsernames = ExplorerController.getExplorersUsernamesByMission(mission);
    res.json(explorersUsernames);

});

app.get("/v1/fizzbuzz/:score", (req, res) => {

    const score = req.params.score;
    const validation = ExplorerController.applyValidationInNumber(score);
    res.json({ score : score, trick : validation });

});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});