const express = require('express');
const Podlet = require('@podium/podlet');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();

const podlet = new Podlet({
    name: 'navPod',
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
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/people">People</a></li>
            <li><a href="/planets">Planets</a></li>
          </ul>
        </nav>
    `);
});

app.get(podlet.manifest(), (req, res) => {
    res.status(200).send(podlet);
});

app.use(express.static(__dirname + '/assets'));
podlet.css({ value: '/styles.css' });

app.listen(PORT);
console.log('Navbar pod listening at port: 3001');
