const express = require('express');

const app = express();

app.use(express.static('./static'));
app.use(express.static('./target'));

app.listen(8080);