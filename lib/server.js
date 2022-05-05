const Express = require('express');
const ExplorerController = require('../lib/controllers/ExplorerController');

const app = Express();
const port = 3000;

app.use(Express.json());

app.get('/', (req, res) => {
    res.json({message: "FizzBuzz Api welcome!"});
});

app.get('/v1/explorers/:mission', (req, res) => {

    const explorersByMission = ExplorerController.getExplorersByMission(req.params.mission);
    res.json(explorersByMission);

});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});