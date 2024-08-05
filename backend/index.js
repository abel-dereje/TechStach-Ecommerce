const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')

require('dotenv').config();
const db_connect = require('./config/db');
const routers = require('./routes/routers.route');
// const authToken = require('./middleware/authToken');


db_connect();

const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))

app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.json());
// app.use(authToken);


app.use("/api",routers)


// Define the port
const port = process.env.PORT_NUMBER; // Default to port 3000 if PORT_NUMBER is not defined

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});