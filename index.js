const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

//app.use(logger);

app.use(function(req, res, next) {
    console.log('Authenticating...');
    next();
});

const riddles = [
    { id : 1, title : 'hamdi' },
    { id : 2, title : 'abi' },
    { id : 3, title : 'nuha' },
];

app.get('/', (req, res) => {
    res.send('Welcome to Criptic-Riddle');
});

app.get('/riddles/:id', (req, res) => {
    riddle = riddles.find( c => c.id === parseInt(req.params.id) );
    if (!riddle) res.status(404).send('The given id is not exist');
    res.send(riddle.title);
});

PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));