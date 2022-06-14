const express = require('express');
const server = express();
const port = process.env.PORT || 3000;

const cultural = require('./src/Tours/cultural.json');
const eco = require('./src/Tours/eco.json');
const aventura = require('./src/Tours/aventura.json');
const religioso = require('./src/Tours/religioso.json');
const gastronomico = require('./src/Tours/gastronomico.json');
const praias = require('./src/Tours/praia.json');


server.get('/cultural', (req, res) => {
    return res.json(cultural);
});

server.get("/eco", (req, res) => {
    return res.json(eco);
});

server.get('/aventura', (req, res) => {
    return res.json(aventura);
});

server.get('/religioso', (req, res) => {
    return res.json(religioso);
});

server.get('/gastronomico', (req, res) => {
    return res.json(gastronomico)
});

server.get('/praias', (req, res) => {
    return res.json(praias);
})




server.listen(port, () => {
    console.log('Server up!!')
})