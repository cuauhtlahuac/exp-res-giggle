/**
 * This server was made to show how you can send a html file generated
 * in the famous framework Vite
 */

// I'm using pnpm as package manager
const express = require('express')
const app = express()
const path = require('path');
// express automatically search inside the view folder to use ejs

const prereactAssetsPath = path.join(__dirname, 'vite-react-giggle', 'dist');
const astroAssetsPath = path.join(__dirname, 'terrestrial-tower', 'dist');
const sveltAssetsPath = path.join(__dirname, 'svelt-giggle-app', 'dist');
const vueAssetsPath = path.join(__dirname, 'vue-giggle-project', 'dist');
const htmlPath = (basePath) => path.join(basePath, 'index.html');

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    next()
})

app.use('/', express.static(path.join(__dirname, 'views')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use((req, res, next) => {
    next();
})
app.use('/app', express.static(path.join(__dirname, 'giggle-app')));
app.get('/app', (req, res) => {
    res.sendFile(path.join(__dirname, 'giggle-app', 'index.html'));
});

app.use((req, res, next) => {
    next();
})

app.use(express.static(prereactAssetsPath));
app.get('/vite-preact', (req, res) => {
    res.sendFile(htmlPath(prereactAssetsPath));
});

app.use(express.static(sveltAssetsPath));
app.get('/vite-svelte', (req, res) => {
    res.sendFile(htmlPath(sveltAssetsPath));
});

app.use(express.static(astroAssetsPath));
app.get('/vite-astro', (req, res) => {
    res.sendFile(htmlPath(astroAssetsPath));
});

app.use(express.static(vueAssetsPath));
app.get('/vite-vue', (req, res) => {
    res.sendFile(htmlPath(vueAssetsPath));
});

app.use((req, res) => res.end('<h1>not found</h1>'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
