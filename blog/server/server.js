require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require("cookie-parser");





app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(cookieParser());


require('./routes/blog.routes')(app);
require('./config/mongoose.config');
// TODO: needs user and blog routes





const port = process.env.MY_PORT;
app.listen(port, () => {console.log(`Listening at Port: ${port}`)});