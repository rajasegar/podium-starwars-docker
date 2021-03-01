const express = require('express');
const Podlet = require('@podium/podlet');
const cors = require('cors');
const PORT = process.env.PORT || 3002;

const app = express();

const podlet = new Podlet({
    name: 'peoplePod',
    version: '1.0.0',
    pathname: '/',
    content: '/',
    fallback: '/fallback',
    development: true,
});

app.use(podlet.middleware());
app.use(cors());

app.get(podlet.content(), (req, res) => {

    res.status(200).podiumSend(`
        <div>
          <h1>People page</h1>
          <div id="people-list">
          <p>Loading people info, please wait...</p>
          </div>
        </div>
    `);
});

app.get(podlet.manifest(), (req, res) => {
    res.status(200).send(podlet);
});

app.use(express.static(__dirname + '/assets'));
podlet.css({ value: '/css/styles.css' });
podlet.js({ value: '/js/main.js' });

app.listen(PORT);
console.log('People pod listening on: 3002');
