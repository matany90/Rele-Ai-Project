const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//express app instance
const app = express();

//fix cors problem
app.use(cors());

 //make POST req include the body to req obj
app.use(bodyParser.json());

require('./routes/usersRoutes')(app);

const PORT = process.env.PORT || 5000; // listen to Heroku's given port (prod), or take 5000 (dev)
app.listen(PORT);
