const express = require('express')
//const db = require("./database/db.js")
const mongoose = require("mongoose")
const cors = require('cors')
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());


// Middleware

const corsOption = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use(cors(corsOption));

mongoose.connect('mongodb+srv://vernikagautam1:vernika@cluster0.hbojyrw.mongodb.net/DatabaseAisensy?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/tasks', require('./routes/taskApi'));

//app.get("/",(req,res)=>{
//	res.json("TodoList Home Page")
//})

app.listen(PORT, ()=>{
	console.log("app running ")
})