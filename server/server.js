var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var sessionConfig = require('./config/sessionConfig');
const cors = require( "cors" );
var port = 3737;

var staticDir = `${ __dirname.substring(0, __dirname.lastIndexOf("/")) }/public`;
app.use( express.static(staticDir) );
app.use(bodyParser.json());
app.use(cors());

app.use(session(sessionConfig));


app.get("/api/screenname", function(req, res, next){
  return res.status(200).json({ "user": req.session.user });
});

app.post("/api/screenname", function(req, res, next){
  req.session.user = req.body;
  return res.status(201).json({"user": req.session.user});
});

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);



app.listen(port, function(){
  console.log("Listening on port ", port, " and it ain't playing Nickelback.");
});
