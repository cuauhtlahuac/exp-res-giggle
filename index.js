/**
 * This server was made to show how you can send a html file generated
 * in the famous framework Vite
 */

// I'm using pnpm as package manager
const express = require('express')
const app = express()
const path = require('path');
// express automatically search inside the view folder to use ejs

const htmlPath = path.join(__dirname, 'vite-react-giggle', 'dist', 'index.html');
const assetsPath = path.join(__dirname, 'vite-react-giggle', 'dist');
const port = 3000
app.use(express.static(assetsPath));
app.get('/', (req, res) => {
    console.log(req);
    res.sendFile(htmlPath);
    res.end();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
