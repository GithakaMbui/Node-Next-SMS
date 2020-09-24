const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');

//Init app
const app = express();

//Template engine setup
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);


//Template folder setup
app.use(express.static(__dirname + '/public'));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Index Route
app.get('/', (req, res) => {
    res.render('index');
})

//Catch form submit
app.post('/', (req, res) => {
    res.send(req.body);
    console.log(req.body);
});

//Define Port
const port = 4000;

//Start server
const server = app.listen(port, () => console.log(`Server started on 
port ${port}`));