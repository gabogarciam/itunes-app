const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/itunes-app'));

app.get('*', (req, res, nex) => {
    res.sendfile(path.join(__dirname + '/dist/itunes-app/index.html'));
});

app.listen(process.env.PORT || 8080);