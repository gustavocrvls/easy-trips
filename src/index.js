const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
require('dotenv').config()

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.API_PORT || 3003, () => {
    console.log(`Server on Port ${ process.env.API_PORT || 3003}`);
});
