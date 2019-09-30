const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname/front-end/dist));
app.get('*',(req,res) => {
    res.sendFile(`./front-end/dist/index.html`);
});

app.listen(process.env.PORT || 8080);