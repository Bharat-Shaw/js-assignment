const express = require('express');
const app = express();
const cors = require('cors');
const { connection } = require('./Config/config.js');
const router = require('./routes/vendorRoute.js');

app.use(cors());
app.use(express.json());

app.use('/vendor', router)

app.listen(8080, async () => {
    await connection;
    console.log('server started at 8080')
})

