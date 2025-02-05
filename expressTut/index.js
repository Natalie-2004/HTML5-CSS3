// https://www.npmjs.com/package/nodemon
// auto-restart server whenever necessary using nodemon xxx.js

const express = require('express');
const app = express();

// this is a default route
app.get('/cats', (req, res) => {
    res.send("meow!")
})

app.post('/cats', (req, res) => {
    res.send('Post request to /cats')
})

app.get('/dogs', (req, res) => {
    res.send("woof!")
})

app.get('/', (req, res) => {
    res.send("This is the Home page!")
})

// subpath: a matching pattern
// : indicates there's variable.
app.get('/r/:subpath', (req, res) => {
    const { subpath } = req.params;
    res.send(`<h1>Browsing the ${subpath} subpath!`)
})

// query string
// search?q=goose
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    }
    res.send(`<h1>Search Result for ${q}: </h1>`)
})

app.get('*', (req, res) => {
    res.send("i don't know this path")
})

app.listen(8000, () => {
    console.log("Listening on port 8000")
})