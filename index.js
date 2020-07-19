const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.json());

require('./routes/dialogFlowRoutes')(app);




const port = process.env.port || 5000;
app.listen(port);