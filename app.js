const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use('/fontawesome', express.static(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(process.env.PORT || port, () => console.log(`App available on ${process.env.PORT || `http://localhost:${port}`}`));