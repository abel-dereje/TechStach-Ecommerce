const express = require('express');
require('dotenv').config();
const db_connect = require('./config/db');
const routers = require('./routes/routers.route');


db_connect();

const app = express();


app.use(express.json());
app.use("/api", routers);

// Define the port
const port = process.env.PORT_NUMBER; // Default to port 3000 if PORT_NUMBER is not defined

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});