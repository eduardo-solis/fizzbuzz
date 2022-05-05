const Express = require('express');

const app = Express();
const port = 3000;

app.use(Express.json());

app.get('/', (req, res) => {
    res.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});