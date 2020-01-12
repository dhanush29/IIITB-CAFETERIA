const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const cors = require('cors');

const items=require('./routes/api/items')
const app=express();

app.use(cors());

//bodyparser middleware
app.use(bodyparser.json());

//DB config
const db=require('./config/keys').mongoURI;

//connect to mongo
mongoose
    .connect(db)
    .then(()=>console.log('MONGODB Connected'))
    .catch(err => console.log(err));
//use routes
app.use('/api/items',items);

const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`server started on port ${port} `));

